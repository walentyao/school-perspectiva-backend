import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { ALREADY_REGISTERED_ERROR } from './auth.constans';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly usersService: UsersService,
	) {}

	@Post('register')
	async register(@Body() dto: AuthRegisterDto) {
		const oldUser = await this.usersService.getUserByEmail(dto.email);
		if (oldUser) {
			throw new BadRequestException(ALREADY_REGISTERED_ERROR);
		}
		return this.usersService.createUser(dto);
	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() { email, password }: AuthLoginDto) {
		const user = await this.authService.validateUser(email, password);
		return this.authService.login(user.email);
	}
}
