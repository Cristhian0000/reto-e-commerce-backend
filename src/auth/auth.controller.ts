import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/authCredentialsDto.dto';
import { CreateUserDto } from './dto/createUserDto.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.authService.signup(createUserDto);
  }

  @Post('/login')
  @HttpCode(200)
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
