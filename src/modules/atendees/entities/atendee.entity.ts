import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Events } from '../../../modules/events/entities/event.entity';

@Entity()
export class Atendees {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Events)
  events: Events[];

  @Column({ nullable: false, length: 100 })
  firstname: string;

  @Column({ nullable: false, length: 100 })
  lastname: string;

  @Column({ nullable: false, length: 100, unique: true })
  email: string;

  @Column({ nullable: false, length: 255 })
  password: string;

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
