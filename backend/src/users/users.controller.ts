import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)

  @Throttle({ default: { limit: 3, ttl: 30000 } })
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.usersService.getUserById(req.user.userId);
    return {
      userId: user._id,
      email: user.email,
      name: user.name,
    };
  }
}