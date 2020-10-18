import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { db } from './database';

function testDatabase() {
  // "user" has to be wrapped in double quotes due to a conflict with postgres' own user table
  // See https://dba.stackexchange.com/questions/73136/cant-list-users-select-from-user-returns-only-one-row-with-one-column
  db.any('SELECT us_name, us_email, us_type  FROM "user"').then(
    (users: any) => {
      console.log(users);
    },
  );

  db.one('SELECT * FROM course WHERE co_id = 2').then((course: any) => {
    console.log(course);
  });
  db.oneOrNone('SELECT * FROM course WHERE co_id = 42069').then(
    (course: any) => {
      console.log(course);
    },
  );
}

async function bootstrap() {
  try {
    await db.connect();
  } catch (e) {
    throw new Error(`Could not connect to database: ${e}`);
  }

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({
    credentials: true,
    origin: true,
  });
  await app.listen(9000, '0.0.0.0');
}
bootstrap();
