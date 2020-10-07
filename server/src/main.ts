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
  app.enableCors();
  await app.listen(9000, '0.0.0.0');
}
bootstrap();
