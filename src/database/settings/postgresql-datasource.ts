import 'dotenv/config';

import { DataSource, DataSourceOptions } from 'typeorm';

export const postgreSqlDataSource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  synchronize: false,
  logging: true,
  extra: {
    timezone: 'UTC',
  },
};

const dataSource = new DataSource(postgreSqlDataSource);
export default dataSource;
