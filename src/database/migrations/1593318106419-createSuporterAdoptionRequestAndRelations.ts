import {MigrationInterface, QueryRunner} from "typeorm";

export class createSuporterAdoptionRequestAndRelations1593318106419 implements MigrationInterface {
    name = 'createSuporterAdoptionRequestAndRelations1593318106419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adoptionRequest" ("id" SERIAL NOT NULL, "accepted" boolean NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "petsId" integer, CONSTRAINT "PK_cff6fc886f834e8d20ef92462fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "suporter" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "cnpj" character varying(11) NOT NULL, "phone" character varying NOT NULL, "website" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_c434bae8664871096f3d7d0d443" UNIQUE ("name"), CONSTRAINT "UQ_591febf98a08a830ea7b29358e5" UNIQUE ("cnpj"), CONSTRAINT "UQ_fcda2a7d4739225a79e514de6bd" UNIQUE ("website"), CONSTRAINT "UQ_84fd6191c0aa136653208f52723" UNIQUE ("email"), CONSTRAINT "PK_6e3e7cd37e1792b35895056fc71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adoptionRequest" ADD CONSTRAINT "FK_c6bc69fc41f611fa8aadf9f24c3" FOREIGN KEY ("petsId") REFERENCES "pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adoptionRequest" DROP CONSTRAINT "FK_c6bc69fc41f611fa8aadf9f24c3"`);
        await queryRunner.query(`DROP TABLE "suporter"`);
        await queryRunner.query(`DROP TABLE "adoptionRequest"`);
    }

}
