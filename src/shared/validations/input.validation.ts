import { BadRequestException } from '@nestjs/common';

export class UpdateInputValidator {
  static validate(input: any) {
    for (const key in input) {
      if (
        input.hasOwnProperty(key) &&
        typeof input[key] === 'string' &&
        input[key].trim() === ''
      ) {
        throw new BadRequestException('Os campos não podem ser vazios');
      }
    }
  }
}
