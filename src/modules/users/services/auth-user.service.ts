import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { BcryptService } from '../../../shared/auth/services/bcrypt.service';
import { AuthUserInput } from '../input';
import { UserRepository } from '../repositories';

@Injectable()
export class AuthUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly bcryptService: BcryptService,
  ) {}

  async execute(input: AuthUserInput): Promise<string> {
    const user = await this.userRepository.findByEmail(input.email);

    if (!user) {
      throw new NotFoundException(`E-mail ${input.email} não encontrado`);
    }

    const passwordMatch = await this.bcryptService.comparePassword(
      input.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const payload = { sub: user.id, role: user.role };
    return await this.jwtService.signAsync(payload);
  }
}
