import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

export const postgreSqlDataSource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: true,
  extra: {
    timezone: 'UTC',
  },
};

const dataSource = new DataSource(postgreSqlDataSource);
export default dataSource;
