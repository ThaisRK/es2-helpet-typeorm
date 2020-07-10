import {MigrationInterface, QueryRunner} from "typeorm";

export class editPetEventOneToOne1593779863928 implements MigrationInterface {
    name = 'editPetEventOneToOne1593779863928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_49e228157c7aa2c6908f5a9cff7"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "UQ_49e228157c7aa2c6908f5a9cff7"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP COLUMN "eventId"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "petId" integer`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "UQ_e8a95dc62d62a164f636287f668" UNIQUE ("petId")`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_e8a95dc62d62a164f636287f668" FOREIGN KEY ("petId") REFERENCES "pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_e8a95dc62d62a164f636287f668"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "UQ_e8a95dc62d62a164f636287f668"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "petId"`);
        await queryRunner.query(`ALTER TABLE "pet" ADD "eventId" integer`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "UQ_49e228157c7aa2c6908f5a9cff7" UNIQUE ("eventId")`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_49e228157c7aa2c6908f5a9cff7" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
