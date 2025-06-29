import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('signup')
    public signUp(@Body() dto: AuthDto) {
        // console.log('dto', dto);
        return this.authService.signUp(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    public signin(@Body() dto: AuthDto) {
        return this.authService.signIn(dto);
    }
}