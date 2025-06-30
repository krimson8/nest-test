import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string) {
    // Find a single user by their ID
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // If a user is found, remove the password hash before returning
    if (user) {
      delete user.hash;
    }

    return user;
  }
}
