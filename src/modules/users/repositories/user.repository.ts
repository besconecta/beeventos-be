import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { Users } from '../entities';
import { CreateUserInput } from '../input';
import { UserAccountOutput } from '../output';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(Users)
    private readonly repository: Repository<Users>,
  ) {}

  async create(input: CreateUserInput): Promise<UserAccountOutput> {
    const userAccount = await this.repository.save(input);
    return plainToClass(UserAccountOutput, userAccount, {
      excludeExtraneousValues: true,
    });
  }
  async findByEmail(userEmail: string): Promise<Users> {
    return await this.repository.findOne({ where: { email: userEmail } });
  }

  async findById(userId: string): Promise<UserAccountOutput> {
    const userAccount = await this.repository.findOne({
      where: { id: userId },
    });
    return plainToClass(UserAccountOutput, userAccount);
  }
}
