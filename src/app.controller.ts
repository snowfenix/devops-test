import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // TODO use GraduationService
  // TODO create routes for api
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
