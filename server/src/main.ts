import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import pgPromise from 'pg-promise';

import { AppModule } from './app.module';

const pgp = pgPromise();
const db = pgp({
  user: 'studio2a',
  database: 'studio2a',
  password: 'DEV_PASSWORD',
  port: 5420,
  host: 'host.docker.internal',
});

function testDatabase() {
  // "user" has to be wrapped in double quotes due to a conflict with postgres' own user table
  // See https://dba.stackexchange.com/questions/73136/cant-list-users-select-from-user-returns-only-one-row-with-one-column
  db.any('SELECT us_name, us_email, us_type  FROM "user"').then((users) => {
    console.log(users);
  });

  db.one('SELECT * FROM course WHERE co_id = 2').then((course) => {
    console.log(course);
  });
  db.oneOrNone('SELECT * FROM course WHERE co_id = 42069').then((course) => {
    console.log(course);
  });
}

async function bootstrap() {
  try {
    await db.connect();
  } catch (e) {
    throw new Error(`Could not connect to database: ${e}`);
  }

  testDatabase(); // Remove or comment this out once you're comfortable doing queries and stuff

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors();
  await app.listen(9000, '0.0.0.0');
}
bootstrap();
