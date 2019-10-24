import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraduationModule } from './graduation/graduation.module';
import { Graduation } from './graduation/model/graduation.entity';

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
      synchronize: true,
    }),
    GraduationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
