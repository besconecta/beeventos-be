import { Injectable } from '@nestjs/common';

import { UserAccountOutput } from '../output';
import { UserRepository } from '../repositories';

@Injectable()
export class ReadUserByIdService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<UserAccountOutput> {
    return await this.userRepository.findById(userId);
  }
}
