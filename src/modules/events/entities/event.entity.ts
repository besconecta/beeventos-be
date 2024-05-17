import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Atendees } from '../../../modules/atendees/entities';
import { Users } from '../../../modules/users/entities';
import { EventStatus } from '../enums';
import { EventsTypes } from '../events-types/entities';

@Entity()
export class Events {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => EventsTypes, (eventType) => eventType.id)
  eventTypeId: string;

  @ManyToOne(() => Users, (user) => user.id)
  userId: string;

  @ManyToMany(() => Atendees)
  @JoinTable()
  atendees: Atendees[];

  @Column({ length: 100, nullable: false, unique: true })
  title: string;

  @Column({ type: 'text', nullable: false })
  about: string;

  @Column({ length: 255, nullable: true })
  bannerUrl: string;

  @Column({ length: 255, nullable: false })
  local: string;

  @Column({ type: 'timestamptz', nullable: true })
  startAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  endAt: Date;

  @Column({ nullable: false, type: 'enum', enum: EventStatus })
  status: EventStatus;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamptz',
  })
  deletedAt: Date;
}
