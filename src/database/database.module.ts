import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { postgreSqlDataSource } from './settings/postgresql-datasource';

@Module({
  imports: [TypeOrmModule.forRoot(postgreSqlDataSource)],
})
export class DatabaseModule {}
