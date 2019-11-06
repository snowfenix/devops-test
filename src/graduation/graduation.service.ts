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

  async isGraduated(username: string): Promise<boolean> {
    const graduation = await this.findGraduationByUsername(username);
    if (!graduation || graduation.graduationDate.getTime() > Date.now()) {
      return false;
    } else {
      return true;
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
