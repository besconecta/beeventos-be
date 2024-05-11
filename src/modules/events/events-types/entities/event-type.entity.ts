import { Column, Entity } from 'typeorm';

import { EntityBase } from '../../../../shared/entities';

@Entity({ name: 'events_types' })
export class EventTypeEntity extends EntityBase {
  @Column({ name: 'ds_type', nullable: false, length: 100 })
  description: string;
}
