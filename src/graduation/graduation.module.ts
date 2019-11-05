import { Module } from '@nestjs/common';
import { GraduationService } from './graduation.service';
import { GraduationController } from './graduation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Graduation } from './model/graduation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Graduation])],
  providers: [GraduationService],
  controllers: [GraduationController],
})
export class GraduationModule {}
