import {MigrationInterface, QueryRunner} from "typeorm";

export class createEventAndRelations1593315128282 implements MigrationInterface {
    name = 'createEventAndRelations1593315128282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "usersId" integer, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pet" ADD "eventId" integer`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "UQ_49e228157c7aa2c6908f5a9cff7" UNIQUE ("eventId")`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_49e228157c7aa2c6908f5a9cff7" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_4d31f16062e167f05e53b6c9a89" FOREIGN KEY ("usersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_4d31f16062e167f05e53b6c9a89"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_49e228157c7aa2c6908f5a9cff7"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "UQ_49e228157c7aa2c6908f5a9cff7"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP COLUMN "eventId"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
