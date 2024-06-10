import { AccountRole } from '../../../shared/enums';

export class UserProfileOutput {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: AccountRole;
}
