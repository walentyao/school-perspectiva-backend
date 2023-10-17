import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './models/user.model';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersCourses, UsersCoursesDocument } from './models/users-courses.model';
import { AddCourseUserDto } from './dto/add-course-user.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
		@InjectModel(UsersCourses.name) private usersCoursesModel: Model<UsersCoursesDocument>,
	) {}

	async getUserByEmail(email: string) {
		return this.userModel.findOne({ email });
	}

	async createUser(dto: CreateUserDto) {
		return this.userModel.create(dto);
	}

	async addCourseForUser(dto: AddCourseUserDto) {
		return this.usersCoursesModel.create({ userId: dto.userId, courseId: dto.courseId });
	}

	async getCoursesUser(userId: Types.ObjectId) {
		return this.usersCoursesModel.find({ userId });
	}
}
