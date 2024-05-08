import { Injectable } from '@nestjs/common';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

import { CreateUserDto } from '../dtos/create-user.dto';
import { UserAccountDto } from '../dtos/user-account.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: BcryptService,
  ) {}

  async execute(data: CreateUserDto): Promise<UserAccountDto> {
    const hashedPassword = await this.bcryptService.hashPassword(data.password);

    return await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
