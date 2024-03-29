import { Test, TestingModule } from '@nestjs/testing';
import { GraduationController } from './graduation.controller';
import { GraduationService } from './graduation.service';
import { Repository } from 'typeorm';

describe('Graduation Controller', () => {
  let controller: GraduationController;
  let service: GraduationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraduationController],
      providers: [
        GraduationService,
        { provide: 'GraduationRepository', useClass: Repository },
      ],
    }).compile();

    controller = module.get<GraduationController>(GraduationController);
    service = module.get<GraduationService>(GraduationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('isGraduated', () => {
    it(`should return a json with the message 'Is graduated'`, async () => {
      jest
        .spyOn(service, 'isGraduated')
        .mockImplementation(() => Promise.resolve(true));

      const result = await controller.isGraduated({ username: 'toto' });
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          message: 'Is graduated',
        }),
      );
    });

    it(`should return a json with the message 'Is not graduated'`, async () => {
      jest
        .spyOn(service, 'isGraduated')
        .mockImplementation(() => Promise.resolve(false));

      const result = await controller.isGraduated({ username: 'toto' });
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          message: 'Is not graduated',
        }),
      );
    });
  });
});
