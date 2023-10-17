import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddCourseUserDto } from './dto/add-course-user.dto';
import { Types } from 'mongoose';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	@Post('/')
	async createUser(@Body() dto: CreateUserDto) {
		return this.userService.createUser(dto);
	}

	@Get('/')
	async getUserByEmail(@Body('email') email: string) {
		return this.userService.getUserByEmail(email);
	}

	@Post('/add-course')
	async addCourseUser(@Body() dto: AddCourseUserDto) {
		return this.userService.addCourseForUser(dto);
	}

	@Get('/courses')
	async getCoursesUser(@Body('userId') id: Types.ObjectId) {
		return this.userService.getCoursesUser(id);
	}
}
