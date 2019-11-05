import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { GraduationService } from './graduation.service';

@Controller('graduation-date')
export class GraduationController {
  constructor(private readonly graduationService: GraduationService) {}
  @Get('/:username')
  async getGraduationMessage(@Param() params): Promise<Object> {
    const message = await this.graduationService.getGraduationMessage(
      params.username,
    );
    return {
      message: message,
    };
  }

  @Put('/:username')
  async insertGraduationDate(
    @Param() params,
    @Body('graduation-date') createGraduationDate: Date,
    @Res() res: Response,
  ) {
    const savedGraduation = await this.graduationService.insertGraduationDate(
      params.username,
      createGraduationDate,
    );
    if (savedGraduation) {
      res.status(HttpStatus.NO_CONTENT).send();
    } else {
      res.send(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
