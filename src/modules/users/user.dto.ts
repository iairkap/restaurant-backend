import { UserRole } from './user.entity';

// create-user.dto.ts
export class CreateUserDto {
  email: string;
  password: string;
  role: UserRole; // Cambiar de string a UserRole
}

// update-user.dto.ts
export class UpdateUserDto {
  email?: string;
  password?: string;
  role: UserRole; // Cambiar de string a UserRole
}
