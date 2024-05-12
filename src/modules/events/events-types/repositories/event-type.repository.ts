import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { EventTypeEntity } from '../entities';
import { CreateEventTypeInput, UpdateEventTypeInput } from '../input';
import { EventTypeOutput } from '../output';

@Injectable()
export class EventTypeRepository {
  constructor(
    @InjectRepository(EventTypeEntity)
    private readonly repository: Repository<EventTypeEntity>,
  ) {}

  async create(input: CreateEventTypeInput): Promise<EventTypeOutput> {
    return await this.repository.save(input);
  }

  async readAll(): Promise<EventTypeOutput[]> {
    return await this.repository.find();
  }

  async readById(id: string): Promise<EventTypeOutput> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, input: UpdateEventTypeInput): Promise<UpdateResult> {
    return await this.repository.update(id, input);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.softDelete(id);
  }
}
