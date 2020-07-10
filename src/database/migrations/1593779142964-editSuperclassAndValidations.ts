import {MigrationInterface, QueryRunner} from "typeorm";

export class editSuperclassAndValidations1593779142964 implements MigrationInterface {
    name = 'editSuperclassAndValidations1593779142964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suporter" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suporter" DROP COLUMN "password"`);
    }

}
