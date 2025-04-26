export enum Roles {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student'
}

export enum AuthStatus {
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated'
}

export interface UserEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Roles;
  createdAt: Date;
  isActive: boolean;
  isAccountVerified: boolean;
  phoneNumber: boolean | null;
  updatedAt: boolean | null;
  avatarUrl: string | null;
  bio: string | null;
}