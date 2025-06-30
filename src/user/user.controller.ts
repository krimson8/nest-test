import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { Roles } from 'src/auth/decorator/role.decorator';
import { Role } from 'src/auth/enum/role.enum';
import { RolesGuard } from 'src/auth/guard/rbac.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@UseGuards(JwtGuard)
@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({ status: 200, description: 'The current user profile.' })
  public getMe(@GetUser() user: User, @GetUser('email') email: string) {
    return {
      id: user.id,
      email,
    };
  }

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Get(':email')
  @ApiOperation({
    summary: 'Get user profile by ID, only accessible by user with Admin role.',
  })
  @ApiResponse({ status: 200, description: 'The user profile.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public findUser(@Param('email') email: string) {
    return this.userService.findUserByEmail(email);
  }
}
