console.log('process.env.DATABASE_URL :>>', process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    //"src/models/**/*.ts"
    "dist/models/**/*.js"
 ],
 "migrations": [
  //"src/database/migrations/**/*.ts"
  "dist/database/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
