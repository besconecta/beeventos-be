import { Logger, Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [Logger],
})
export class AppModule {}
