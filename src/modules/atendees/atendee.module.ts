import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/shared/auth/services/auth.service';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

import { CreateAtendeeController } from './controllers';
import { AtendeeEntity } from './entities';
import { AtendeeRepository } from './repositories';
import { CreateAtendeeService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([AtendeeEntity])],
  providers: [
    AtendeeRepository,
    AuthService,
    CreateAtendeeService,
    BcryptService,
  ],
  controllers: [CreateAtendeeController],
})
export class AtendeeModule {}
