import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Graduation } from './model/graduation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GraduationService {
  constructor(
    @InjectRepository(Graduation)
    private graduationRepository: Repository<Graduation>,
  ) {}

  async insertGraduationDate(
    username: string,
    graduationDate: Date,
  ): Promise<Graduation> {
    const graduation = this.graduationRepository.create();
    graduation.graduationDate = graduationDate;
    graduation.username = username;
    return await this.graduationRepository.save(graduation);
  }

  async getGraduationMessage(username: string): Promise<string> {
    const graduation = await this.findGraduationByUsername(username);
    if (!graduation || graduation.graduationDate.getTime() > Date.now()) {
      return 'Is not graduated';
    } else {
      return 'Is graduated';
    }
  }

  private async findGraduationByUsername(
    username: string,
  ): Promise<Graduation> {
    const graduation = await this.graduationRepository.findOne({
      where: { username: username },
    });
    return graduation;
  }
}
