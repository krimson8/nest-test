import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  public getMe(@GetUser() user: User, @GetUser('email') email: string) {
    console.log('user', user, email);
    return {
      id: user.id,
      email,
    };
  }
}
