import { BadRequestException, ParseUUIDPipe } from '@nestjs/common';

export class UUIDFormatValidation extends ParseUUIDPipe {
  constructor() {
    super({
      exceptionFactory: () =>
        new BadRequestException('ID com formato inválido'),
    });
  }
}
