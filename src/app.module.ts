import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraduationModule } from './graduation/graduation.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), GraduationModule],
})
export class AppModule {}
