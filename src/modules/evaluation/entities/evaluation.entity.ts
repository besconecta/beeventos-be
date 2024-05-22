import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

import { Atendees } from '../../../modules/atendees/entities';
import { Events } from '../../../modules/events/entities';

@Entity()
@Unique(['event', 'atendee'])
export class Evaluations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Events, { nullable: false })
  event: Events;

  @ManyToOne(() => Atendees, { nullable: false })
  atendee: Atendees;

  @Column()
  rating: number;

  @Column({ type: 'text' })
  comment: string;

  @Column({ type: 'boolean' })
  anonymous: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
