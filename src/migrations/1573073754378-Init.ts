import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1573073754378 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE public.graduation (
        username varchar NOT NULL,
        "graduationDate" date NOT NULL,
        CONSTRAINT graduation_pk PRIMARY KEY (username, "graduationDate")
        );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE public.graduation`);
  }
}
