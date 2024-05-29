import { Atendees } from '../../../modules/atendees/entities';
import { UserAccountOutput } from '../../../modules/users/output';
import { UserProfileOutput } from '../output/user-profile.output';

export const userProfileMapper = (
  data: UserAccountOutput | Atendees,
): UserProfileOutput => {
  return {
    id: data.id,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    role: data.role,
  };
};
