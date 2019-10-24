import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Graduation } from './model/graduation.entity';
import { GraduationService } from './graduation.service';
import { GraduationController } from './graduation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Graduation])],
  providers: [GraduationService],
  controllers: [GraduationController],
})
export class GraduationModule {}
