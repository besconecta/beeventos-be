import { BadRequestException, Injectable } from '@nestjs/common';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

import { CreateAtendeeInput } from '../input';
import { AtendeeAccountOutput } from '../output';
import { AtendeeRepository } from '../repositories';

@Injectable()
export class CreateAtendeeService {
  constructor(
    private readonly atendeeRepository: AtendeeRepository,
    private readonly bcryptService: BcryptService,
  ) {}

  async execute(input: CreateAtendeeInput): Promise<AtendeeAccountOutput> {
    if (input.password !== input.passwordConfirmation) {
      throw new BadRequestException('As senhas não coincidem');
    }

    const hashedPassword = await this.bcryptService.hashPassword(
      input.password,
    );

    return await this.atendeeRepository.create({
      ...input,
      password: hashedPassword,
    });
  }
}
