import { User } from '@prisma/client';

/**
 * Represents the public-facing user data, omitting the 'hash'.
 */
export type UserProfile = Omit<User, 'hash' | 'id'>;
