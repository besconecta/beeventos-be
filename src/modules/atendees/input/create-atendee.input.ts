import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateAtendeeInput {
  @ApiProperty({
    name: 'fistname',
    example: 'Luke',
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
    example: 'luke@tatooine.com',
  })
  @IsEmail({}, { message: 'Precisa ser um e-mail válido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;

  @ApiProperty({
    name: 'password',
    example: '@LukeSky2024',
  })
  @IsStrongPassword(
    {},
    { message: 'A senha precisa obedecer critérios de complexidade' },
  )
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;

  @ApiProperty({
    name: 'passwordConfirmation',
    example: '@LukeSky2024',
  })
  @IsStrongPassword(
    {},
    { message: 'A senha precisa obedecer critérios de complexidade' },
  )
  @IsNotEmpty({ message: 'Confirmação de senha é obrigatória' })
  passwordConfirmation: string;
}
