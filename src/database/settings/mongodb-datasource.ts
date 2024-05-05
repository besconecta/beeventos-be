import 'dotenv/config';

import { DataSource, DataSourceOptions } from 'typeorm';

export const mongodbDataSource: DataSourceOptions = {
  type: 'mongodb',
  url: process.env.MONGODB_URI,
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
};

const dataSource = new DataSource(mongodbDataSource);
console.log('Conectando ao MongoDB...');

export default dataSource;
