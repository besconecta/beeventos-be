import { IsEnum, IsIn, IsNumber, IsOptional, Min } from 'class-validator';

import { PageOrder } from './page-order';

export class PageOptionsDto {
  @IsOptional()
  @IsEnum(PageOrder)
  order: PageOrder = PageOrder.ASC;

  @IsOptional()
  @IsNumber({}, { message: 'O parâmetro page precisa ser numérico' })
  @Min(1)
  page: number = 1;

  @IsOptional()
  @IsIn([10, 20, 30])
  take: number = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
