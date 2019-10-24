import { Test, TestingModule } from '@nestjs/testing';
import { GraduationController } from './graduation.controller';

describe('Graduation Controller', () => {
  let controller: GraduationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraduationController],
    }).compile();

    controller = module.get<GraduationController>(GraduationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
