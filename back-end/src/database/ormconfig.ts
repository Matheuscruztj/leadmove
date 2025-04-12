const dotenv = require('dotenv');
const { DataSource } = require('typeorm');

dotenv.config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    'dist/**/*.entity{.js,.ts}',
  ],
  migrations: ['dist/database/migrations/*{.js,.ts}'],
});

module.exports = {
  dataSource
};