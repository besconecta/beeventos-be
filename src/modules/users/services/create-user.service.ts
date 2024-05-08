import { Injectable } from '@nestjs/common';

import { CreateUserDto } from '../dtos/create-user.dto';
import { UserAccountDto } from '../dtos/user-account.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUserDto): Promise<UserAccountDto | null> {
    return await this.userRepository.create(data);
  }
}
