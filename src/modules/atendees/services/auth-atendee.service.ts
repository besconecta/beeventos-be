import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { BcryptService } from '../../../shared/auth/services/bcrypt.service';
import { AuthAtendeeInput } from '../input';
import { AtendeeRepository } from '../repositories';

@Injectable()
export class AuthAtendeeService {
  constructor(
    private readonly atendeeRepository: AtendeeRepository,
    private readonly jwtService: JwtService,
    private readonly bcryptService: BcryptService,
  ) {}

  async execute(input: AuthAtendeeInput): Promise<string> {
    const atendee = await this.atendeeRepository.readByEmail(input.email);

    if (!atendee) {
      throw new NotFoundException(`E-mail não encontrado`);
    }

    const passwordMatch = await this.bcryptService.comparePassword(
      input.password,
      atendee.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const payload = { sub: atendee.id };
    return await this.jwtService.signAsync(payload);
  }
}
