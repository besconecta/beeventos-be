import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { AccountRole } from '../../../shared/enums';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 100 })
  firstname: string;

  @Column({ nullable: false, length: 100 })
  lastname: string;

  @Column({ nullable: false, length: 100, unique: true })
  email: string;

  @Column({ nullable: false, length: 255 })
  password: string;

  @Column({ nullable: false, type: 'enum', enum: AccountRole })
  role: AccountRole;

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
