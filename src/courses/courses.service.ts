import { Injectable } from '@nestjs/common';
import { Courses } from './models/courses.model';
import { CreateCourseDto } from './dto/create-course.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CategoryCourses } from './models/category-courses.model';
import { CreateCategoryCoursesDto } from './dto/create-category-courses.dto';

@Injectable()
export class CoursesService {
	constructor(@InjectModel(Courses) private coursesRepository: typeof Courses,
							@InjectModel(CategoryCourses) private categoryCoursesRepository: typeof CategoryCourses) {
	}

	async createCourse(dto: CreateCourseDto) {
		return this.coursesRepository.create(dto);
	}

	async getCourseById(id: number) {
		return this.coursesRepository.findByPk(id);
	}

	async getAllCourses() {
		return this.coursesRepository.findAll();
	}

	async getCourseByCategory(categoryId: number) {
		const courses = await this.coursesRepository.findAll({
			where: {
				categoryId,
			},
		});
		return courses
	}

	async createCategoryCourses(dto: CreateCategoryCoursesDto) {
		return this.categoryCoursesRepository.create(dto);
	}

	async getCategoryCourses() {
		return this.categoryCoursesRepository.findAll();
	}
}
