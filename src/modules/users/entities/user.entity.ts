import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'ds_firstname', nullable: false, length: 100 })
  firstname: string;

  @Column({ name: 'ds_lastname', nullable: false, length: 100 })
  lastname: string;

  @Column({ name: 'ds_email', nullable: false, length: 100, unique: true })
  email: string;

  @Column({ name: 'hs_password', nullable: false, length: 255 })
  password: string;

  @CreateDateColumn({
    name: 'dh_created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'dh_updated_at',
  })
  updatedAt: Date;
}
