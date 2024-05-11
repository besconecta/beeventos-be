import { Column, Entity } from 'typeorm';

import { EntityBase } from '../../../shared/entities';

@Entity({ name: 'atendees' })
export class AtendeeEntity extends EntityBase {
  @Column({ name: 'ds_firstname', nullable: false, length: 100 })
  firstname: string;

  @Column({ name: 'ds_lastname', nullable: false, length: 100 })
  lastname: string;

  @Column({ name: 'ds_email', nullable: false, length: 100, unique: true })
  email: string;

  @Column({ name: 'hs_password', nullable: false, length: 255 })
  password: string;
}
