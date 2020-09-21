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
  port: 5432,
  host: 'localhost',
});
async function bootstrap() {
  await db.connect();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors();
  await app.listen(9000, '0.0.0.0');
}
bootstrap();
