import { Module } from '@nestjs/common';

import { EventTypeModule } from './events-types/event-type.module';

@Module({
  imports: [EventTypeModule],
})
export class EventModule {}
