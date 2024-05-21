import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsArray } from 'class-validator';

import { PageMetaDto } from './page-meta.dto';

export class PageDto<T> {
  @ApiProperty({
    name: 'result',
    example: {
      data: [],
    },
  })
  @Expose()
  @IsArray()
  data: T[];

  @ApiProperty({
    name: 'meta',
    example: {
      page: 1,
      take: 10,
      itemCount: 10,
      pageCount: 1,
      hasPreviousPage: false,
      hasNextPage: false,
    },
  })
  @Expose()
  meta: PageMetaDto;

  constructor(data: T[], meta: PageMetaDto) {
    (this.data = data), (this.meta = meta);
  }
}
