import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, UserCreationDto } from './dto/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Create a new user with role.' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  public signUp(@Body() singUpPayload: UserCreationDto) {
    return this.authService.signUp(singUpPayload);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiOperation({ summary: 'User sign-in.' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully signed in.',
  })
  public signin(@Body() signInPayload: SignInDto) {
    return this.authService.signIn(signInPayload);
  }
}
