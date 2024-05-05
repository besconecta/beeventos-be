import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { mongodbDataSource } from './settings/mongodb-datasource';

@Module({
  imports: [TypeOrmModule.forRoot(mongodbDataSource)],
})
export class DatabaseModule {}
