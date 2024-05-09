import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthUserInput {
  @ApiProperty({
    name: 'email',
    example: 'anakin@tatooine.com',
  })
  @IsEmail({}, { message: 'Precisa ser um e-mail válido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;

  @ApiProperty({
    name: 'password',
    example: 'AnakinSky2024',
  })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;
}
