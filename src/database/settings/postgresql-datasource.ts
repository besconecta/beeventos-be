import 'dotenv/config';

import { DataSource, DataSourceOptions } from 'typeorm';

export const postgreSqlDataSource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  //synchronize: true,
  logging: true,
};

const dataSource = new DataSource(postgreSqlDataSource);
export default dataSource;
