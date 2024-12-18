import { Controller, Post, Body } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Throttle({ default: { limit: 3, ttl: 30000 } })
  @Post('signup')
  signUp(@Body() dto: SignupDto) {
    return this.authService.signUp(dto);
  }

  @Throttle({ default: { limit: 3, ttl: 30000 } })
  @Post('signin')
  signIn(@Body() dto: LoginDto) {
    return this.authService.signIn(dto);
  }
}