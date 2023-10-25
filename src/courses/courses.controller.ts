import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { CreateCategoryCoursesDto } from './dto/create-category-courses.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserEmail } from '../decorators/user-email.decorator';

@Controller('courses')
export class CoursesController {
	constructor(private readonly coursesService: CoursesService) {}

	@Post('/')
	async createCourse(@Body() dto: CreateCourseDto) {
		return this.coursesService.createCourse(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Get('/')
	async getAllCourses(@UserEmail() email: string) {
		// console.log(email);
		return this.coursesService.getAllCourses();
	}

	@Get('/course/:id')
	async getCourseById(@Param('id') id: number) {
		return this.coursesService.getCourseById(id);
	}

	@Get('/courses-category')
	async getCoursesByCategory(@Query('categoryId') categoryId: number) {
		return this.coursesService.getCourseByCategory(categoryId);
	}

	@Post('/category')
	async createCategoryCourses(@Body() dto: CreateCategoryCoursesDto) {
		return this.coursesService.createCategoryCourses(dto);
	}

	@Get('/category')
	async getCategoryCourses() {
		return this.coursesService.getCategoryCourses();
	}
}
