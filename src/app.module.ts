import { Logger, Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { AtendeeModule } from './modules/atendees/atendee.module';
import { EventModule } from './modules/events/event.module';
import { EventTypeModule } from './modules/events/events-types/event-type.module';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './shared/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    AtendeeModule,
    EventModule,
    EventTypeModule,
  ],
  providers: [Logger],
})
export class AppModule {}
