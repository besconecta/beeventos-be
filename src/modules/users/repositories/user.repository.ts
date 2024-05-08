import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateUserDto } from '../dtos/create-user.dto';
import { UserAccountDto } from '../dtos/user-account.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDto): Promise<UserAccountDto> {
    const userAccount = await this.repository.save(data);
    return plainToClass(UserAccountDto, userAccount, {
      excludeExtraneousValues: true,
    });
  }
}
