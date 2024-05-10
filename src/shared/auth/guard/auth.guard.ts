import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
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
    return true;
  }
}
