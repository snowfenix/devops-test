import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Graduation } from './graduation/model/graduation.entity';
import { GraduationModule } from './graduation/graduation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'devops-test',
      entities: [Graduation],
    }),
    GraduationModule,
  ],
})
export class AppModule {}
