import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthUserDto {
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

export class AuthUserResponseDto {
  @ApiProperty({
    name: 'message',
    example: 'Login efetuado com sucesso',
  })
  message: string;
  @ApiProperty({
    name: 'access_token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1MzI1NDI2NC0zMmEwLTRhYWYtODIxZC02MmU3ZTZkNDRhZTUiLCJyb2xlIjoidXNlciIsImlhdCI6MTcxNTIxOTk5Nn0.XpEXFOBfS3p7bBWO7iC5qrcwQQ5jvTp1yE6hUZcDkiw',
  })
  access_token: string;
}
