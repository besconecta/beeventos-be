import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      message: 'Service is up and running',
      timestamp: new Date(),
    };
  }
}
