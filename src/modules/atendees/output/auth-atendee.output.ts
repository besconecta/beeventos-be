import { ApiProperty } from '@nestjs/swagger';

export class AuthAtendeeOutput {
  @ApiProperty({
    name: 'access_token',
    example:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTY1MDAwNzUsImV4cCI6MTc0ODAzNjA3NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.HuAFMDqT74wtq_l9MZuB9gLubGI6gaVVyvVHf7tco3A',
  })
  access_token: string;
}
