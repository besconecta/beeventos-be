import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsStrongPassword } from 'class-validator';

import { AccountRole } from '../../../shared/enums';

export class CreateUserInput {
  @ApiProperty({
    name: 'fistname',
    example: 'Anakin',
  })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  firstname: string;

  @ApiProperty({
    name: 'lastname',
    example: 'Skywalker',
  })
  @IsNotEmpty({ message: 'Sobrenome é obrigatório' })
  lastname: string;

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
  @IsStrongPassword(
    {},
    { message: 'A senha precisa obedecer critérios de complexidade' },
  )
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;

  @ApiProperty({
    name: 'passwordConfirmation',
    example: 'AnakinSky2024',
  })
  @IsStrongPassword(
    {},
    { message: 'A senha precisa obedecer critérios de complexidade' },
  )
  @IsNotEmpty({ message: 'Confirmação de senha é obrigatória' })
  passwordConfirmation: string;

  @ApiProperty({ name: 'role', example: 'admin, user, atendee' })
  @IsEnum(AccountRole, { message: 'Perfil inválido' })
  @IsNotEmpty({ message: 'Perfil do usuário é obrigatório' })
  role: AccountRole;
}
