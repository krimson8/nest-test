import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy";

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtService]
})
export class AuthModule {
    
}