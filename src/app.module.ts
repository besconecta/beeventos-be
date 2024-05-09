import { Logger, Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/common/auth/auth.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  providers: [Logger],
})
export class AppModule {}
