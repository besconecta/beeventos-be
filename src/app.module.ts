import { Logger, Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './shared/auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  providers: [Logger],
})
export class AppModule {}
