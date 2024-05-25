import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Users } from '../../../modules/users/entities';
import { EventStatus } from '../enums';
import { EventsTypes } from '../events-types/entities';

@Entity()
export class Events {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  eventTypeId: string;

  @ManyToOne(() => EventsTypes, (eventType) => eventType.events, {
    nullable: false,
  })
  @JoinColumn({ name: 'eventTypeId' })
  eventType: EventsTypes;

  @Column({ nullable: false })
  userId: string;

  @ManyToOne(() => Users, (user) => user.events, { nullable: false })
  user: Users;

  @Column({ length: 100, nullable: false, unique: true })
  title: string;

  @Column({ type: 'text', nullable: false })
  about: string;

  @Column({ length: 255, nullable: true })
  bannerUrl: string;

  @Column({ length: 255, nullable: false })
  local: string;

  @Column({ type: 'timestamp without time zone' })
  startAt: Date;

  @Column({ type: 'timestamp without time zone' })
  endAt: Date;

  @Column({ type: 'enum', enum: EventStatus })
  status: EventStatus;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
