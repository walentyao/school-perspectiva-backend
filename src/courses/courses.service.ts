import { Injectable } from '@nestjs/common';
import { Courses } from './models/courses.model';
import { CreateCourseDto } from './dto/create-course.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CoursesService {
	constructor(@InjectModel(Courses) private coursesRepository: typeof Courses) {}

	async createCourse(dto: CreateCourseDto) {
		return this.coursesRepository.create(dto);
	}

	async getCourseById(id: number) {
		return this.coursesRepository.findByPk(id);
	}
}
