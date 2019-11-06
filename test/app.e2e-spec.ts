import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { GraduationService } from './../src/graduation/graduation.service';
import { Graduation } from './../src/graduation/model/graduation.entity';
import { Repository } from 'typeorm';

describe('AppController (e2e)', () => {
  let app;
  let service: GraduationService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        GraduationService,
        { provide: 'GraduationRepository', useClass: Repository },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    service = moduleFixture.get<GraduationService>(GraduationService);
    await app.init();
  });

  it('/graduation-date/{username} (GET)', () => {
    jest
      .spyOn(service, 'isGraduated')
      .mockImplementation(() => Promise.resolve(true));

    return request(app.getHttpServer())
      .get('/graduation-date/toto')
      .expect(200)
      .expect({ message: 'Is graduated' });
  });

  it('/graduation-date/{usernane} (PUT)', () => {
    const graduation = new Graduation();
    graduation.username = 'toto';
    graduation.graduationDate = new Date('2019-11-01');

    jest
      .spyOn(service, 'insertGraduationDate')
      .mockImplementation(() => Promise.resolve(graduation));

    return request(app.getHttpServer())
      .put('/graduation-date/toto')
      .send({
        'graduation-date': '2019-11-01',
      })
      .expect(204);
  });

  it('/graduation-date/{usernane} (PUT) failure', () => {
    jest
      .spyOn(service, 'insertGraduationDate')
      .mockImplementation(() => Promise.reject());

    return request(app.getHttpServer())
      .put('/graduation-date/toto')
      .send({
        'graduation-date': '2019-11-01',
      })
      .expect(500);
  });

  afterAll(async () => {
    await app.close();
  });
});
