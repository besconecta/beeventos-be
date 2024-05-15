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

  @Column({ nullable: false })
  role: AccountRole;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
