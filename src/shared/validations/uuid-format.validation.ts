import { BadRequestException, ParseUUIDPipe } from '@nestjs/common';

export class UUIDFormatValidation extends ParseUUIDPipe {
  constructor(resource: string) {
    super({
      exceptionFactory: () =>
        new BadRequestException(`ID de ${resource} com formato inválido`),
    });
  }
}
