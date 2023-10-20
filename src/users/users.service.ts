import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AddCourseUserDto } from './dto/add-course-user.dto';
import { Users } from './models/users.model';
import { InjectModel } from '@nestjs/sequelize';
import { UsersCourses } from './models/users-courses.model';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(Users) private usersRepository: typeof Users,
		@InjectModel(UsersCourses) private usersCoursesRepository: typeof UsersCourses,
	) {}

	async getUserByEmail(email: string) {
		return this.usersRepository.findOne({ where: { email } });
	}

	async createUser(dto: CreateUserDto) {
		return this.usersRepository.create(dto);
	}

	async addCourseForUser(dto: AddCourseUserDto) {
		return this.usersCoursesRepository.create(dto);
	}

	async getCoursesUser(userId: number) {
		return this.usersCoursesRepository.findByPk(userId);
	}
}
