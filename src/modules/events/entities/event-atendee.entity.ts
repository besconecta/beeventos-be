import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Atendees } from '../../../modules/atendees/entities';
import { Events } from './event.entity';

@Entity()
export class EventsAtendees {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Events)
  event: Events;

  @ManyToOne(() => Atendees)
  atendee: Atendees;

  @CreateDateColumn({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'date',
  })
  deletedAt: Date;
}
