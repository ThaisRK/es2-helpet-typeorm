import {MigrationInterface, QueryRunner} from "typeorm";

export class editRelations1593347526207 implements MigrationInterface {
    name = 'editRelations1593347526207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_59034d06bd91c11b055bd41a25f"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME COLUMN "eventsId" TO "eventId"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME CONSTRAINT "UQ_59034d06bd91c11b055bd41a25f" TO "UQ_49e228157c7aa2c6908f5a9cff7"`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_49e228157c7aa2c6908f5a9cff7" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_49e228157c7aa2c6908f5a9cff7"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME CONSTRAINT "UQ_49e228157c7aa2c6908f5a9cff7" TO "UQ_59034d06bd91c11b055bd41a25f"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME COLUMN "eventId" TO "eventsId"`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_59034d06bd91c11b055bd41a25f" FOREIGN KEY ("eventsId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
