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

  @ManyToOne(() => EventsTypes)
  eventType: EventsTypes;

  @ManyToOne(() => Users)
  user: Users;

  @ManyToMany(() => Atendees)
  @JoinTable()
  atendees: Atendees[];

  @Column({ length: 100, nullable: false, unique: true })
  title: string;

  @Column({ type: 'text', nullable: false })
  about: string;

  @Column({ length: 255 })
  bannerUrl: string;

  @Column({ length: 255, nullable: false })
  local: string;

  @Column()
  startAt: Date;

  @Column()
  endAt: Date;

  @Column({ nullable: false })
  status: EventStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
