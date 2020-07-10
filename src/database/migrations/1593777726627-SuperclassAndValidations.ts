import {MigrationInterface, QueryRunner} from "typeorm";

export class SuperclassAndValidations1593777726627 implements MigrationInterface {
    name = 'SuperclassAndValidations1593777726627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suporter" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "suporter" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "suporter" DROP CONSTRAINT "UQ_c434bae8664871096f3d7d0d443"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suporter" ADD CONSTRAINT "UQ_c434bae8664871096f3d7d0d443" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "suporter" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "suporter" ADD "password" character varying NOT NULL`);
    }

}
