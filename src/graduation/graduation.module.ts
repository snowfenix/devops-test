import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Graduation } from './model/graduation.entity';
import { GraduationService } from './graduation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Graduation])],
  providers: [GraduationService],
})
export class GraduationModule {}
