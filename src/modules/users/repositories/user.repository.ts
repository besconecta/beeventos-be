import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { UserEntity } from '../entities';
import { CreateUserInput } from '../input';
import { UserAccountOutput } from '../output';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserInput): Promise<UserAccountOutput> {
    const userAccount = await this.repository.save(data);
    return plainToClass(UserAccountOutput, userAccount, {
      excludeExtraneousValues: true,
    });
  }
  async findByEmail(userEmail: string): Promise<UserEntity> {
    return await this.repository.findOne({ where: { email: userEmail } });
  }
}
