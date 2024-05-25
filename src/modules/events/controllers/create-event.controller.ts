import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { UserGuard } from '../../../shared/auth/guard';
import { ApiCreateEventResponses } from '../decorators';
import { CreateEventInput } from '../input';
import { CreateEventOutput } from '../output';
import { CreateEventService } from '../services';

@Controller('events')
export class CreateEventController {
  constructor(private readonly createEventService: CreateEventService) {}

  @Post()
  @UseGuards(UserGuard)
  @ApiCreateEventResponses()
  async handle(@Body() input: CreateEventInput): Promise<CreateEventOutput> {
    return await this.createEventService.execute(input);
  }
}
