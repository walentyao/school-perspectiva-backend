import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from '../users/models/users.model';
import { compare } from 'bcryptjs';
import { USER_NOT_FOUND, WRONG_PASSWORD_ERROR } from './auth.constans';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		@InjectModel(Users) private readonly userRepository: typeof Users,
		private readonly jwtService: JwtService,
	) {}

	async validateUser(email: string, password: string) {
		const user = await this.usersService.getUserByEmail(email);
		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND);
		}
		const isCorrectPassword = await compare(password, user.password);

		if (!isCorrectPassword) {
			throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
		}
		return { email: user.email };
	}

	async login(email: string) {
		const payload = { email };

		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
