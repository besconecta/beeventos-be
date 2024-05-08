import { Expose } from 'class-transformer';

export class UserAccountDto {
  @Expose()
  id: string;

  @Expose()
  email: string;
}
