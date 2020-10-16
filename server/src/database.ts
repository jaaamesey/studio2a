import pgPromise from 'pg-promise';

const pgp = pgPromise();
export const db = pgp({
  user: 'studio2a',
  database: 'studio2a',
  password: 'DEV_PASSWORD',
  port: 5420,
  host: 'host.docker.internal',
});