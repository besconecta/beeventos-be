import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { AccountRole } from '../../enums';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AtendeeGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const { authorization }: any = request.headers;

    if (!authorization || authorization.trim() === '') {
      throw new ForbiddenException('Sessão expirada! Faça login novamente.');
    }

    const token = authorization.replace(/bearer/gim, '').trim();
    const resp = await this.authService.validateToken(token);

    request.decodedData = resp;

    if (request.decodedData.role !== AccountRole.Atendee) {
      throw new UnauthorizedException('Usuário sem permissão');
    }

    return true;
  }
}
