import { BadRequestException, Injectable } from '@nestjs/common';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

import { CreateUserInput } from '../input';
import { UserAccountOutput } from '../output';
import { UserRepository } from '../repositories';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: BcryptService,
  ) {}

  async execute(data: CreateUserInput): Promise<UserAccountOutput> {
    if (data.password !== data.passwordConfirmation) {
      throw new BadRequestException('As senhas não coincidem');
    }

    const hashedPassword = await this.bcryptService.hashPassword(data.password);

    return await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
