import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  salt: number = 10;

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.salt);
  }

  async comparePassword(plainText: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(plainText, hash);
    return !!result;
  }
}
