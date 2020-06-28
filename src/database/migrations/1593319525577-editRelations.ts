import {MigrationInterface, QueryRunner} from "typeorm";

export class editRelations1593319525577 implements MigrationInterface {
    name = 'editRelations1593319525577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_49e228157c7aa2c6908f5a9cff7"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME COLUMN "eventId" TO "eventsId"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME CONSTRAINT "UQ_49e228157c7aa2c6908f5a9cff7" TO "UQ_59034d06bd91c11b055bd41a25f"`);
        await queryRunner.query(`ALTER TABLE "adoptionRequest" ADD "sendById" integer`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_59034d06bd91c11b055bd41a25f" FOREIGN KEY ("eventsId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adoptionRequest" ADD CONSTRAINT "FK_dd32fec3afe28f23443d7d8806a" FOREIGN KEY ("sendById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adoptionRequest" DROP CONSTRAINT "FK_dd32fec3afe28f23443d7d8806a"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_59034d06bd91c11b055bd41a25f"`);
        await queryRunner.query(`ALTER TABLE "adoptionRequest" DROP COLUMN "sendById"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME CONSTRAINT "UQ_59034d06bd91c11b055bd41a25f" TO "UQ_49e228157c7aa2c6908f5a9cff7"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME COLUMN "eventsId" TO "eventId"`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_49e228157c7aa2c6908f5a9cff7" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
