import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

import { Atendees } from '../../../modules/atendees/entities';
import { Events } from './event.entity';

@Entity()
@Unique(['event', 'atendee'])
export class EventsAtendees {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Events, { nullable: false })
  event: Events;

  @ManyToOne(() => Atendees, { nullable: false })
  atendee: Atendees;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
