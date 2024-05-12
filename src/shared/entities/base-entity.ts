import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class EntityBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'dh_created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'dh_updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'dh_deleted_at',
  })
  deletedAt: Date;
}
