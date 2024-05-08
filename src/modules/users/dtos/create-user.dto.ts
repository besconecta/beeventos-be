import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  firstname: string;

  @IsNotEmpty({ message: 'Sobrenome é obrigatório' })
  lastname: string;

  @IsEmail({}, { message: 'Precisa ser um e-mail válido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;

  @IsStrongPassword(
    {},
    { message: 'A senha precisa obedecer critérios de complexidade' },
  )
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;

  @IsStrongPassword(
    {},
    { message: 'A senha precisa obedecer critérios de complexidade' },
  )
  @IsNotEmpty({ message: 'Confirmação de senha é obrigatória' })
  passwordConfirmation: string;
}
