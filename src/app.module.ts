import { Logger, Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { AtendeeModule } from './modules/atendees/atendee.module';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './shared/auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, AtendeeModule],
  providers: [Logger],
})
export class AppModule {}
