import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

// load configs from the .env file if it exists
// the .env file must be is at the root of the project
// You can also make a singleton service that load and expose the .env file content.
const envFilePath: string = `.env`;
let dbConf: any;
if (fs.existsSync(envFilePath)) {
  const env = dotenv.parse(fs.readFileSync(envFilePath));
  dbConf = {
    DB_HOST: env['DB_HOST'],
    DB_PORT: env['DB_PORT'],
    DB_USERNAME: env['DB_USERNAME'],
    DB_PASSWORD: env['DB_PASSWORD'],
    DB_NAME: env['DB_NAME'],
  };
} else {
  dbConf = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  };
}

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'postgres',
  host: dbConf['DB_HOST'],
  port: dbConf['DB_PORT'],
  username: dbConf['DB_USERNAME'],
  password: dbConf['DB_PASSWORD'],
  database: dbConf['DB_NAME'],
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = config;
