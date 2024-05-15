import { BadRequestException, Injectable } from '@nestjs/common';

import { BcryptService } from '../../../shared/auth/services/bcrypt.service';
import { CreateUserInput } from '../input';
import { UserAccountOutput } from '../output';
import { UserRepository } from '../repositories';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: BcryptService,
  ) {}

  async execute(input: CreateUserInput): Promise<UserAccountOutput> {
    if (input.password !== input.passwordConfirmation) {
      throw new BadRequestException('As senhas não coincidem');
    }

    const hashedPassword = await this.bcryptService.hashPassword(
      input.password,
    );

    return await this.userRepository.create({
      ...input,
      password: hashedPassword,
    });
  }
}
