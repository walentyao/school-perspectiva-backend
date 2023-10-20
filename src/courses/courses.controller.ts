import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
	constructor(private readonly coursesService: CoursesService) {}

	@Post('/')
	async createCourse(@Body() dto: CreateCourseDto) {
		return this.coursesService.createCourse(dto);
	}

	@Get('/:id')
	async getCourseById(@Param('id') id: number) {
		return this.coursesService.getCourseById(id);
	}
}
