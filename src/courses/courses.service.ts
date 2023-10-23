import { Injectable } from '@nestjs/common';
import { Courses } from './models/courses.model';
import { CreateCourseDto } from './dto/create-course.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CategoryCourses } from './models/category-courses.model';
import { CreateCategoryCoursesDto } from './dto/create-category-courses.dto';

@Injectable()
export class CoursesService {
	constructor(
		@InjectModel(Courses) private coursesRepository: typeof Courses,
		@InjectModel(CategoryCourses) private categoryCoursesRepository: typeof CategoryCourses,
	) {}

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
		return await this.coursesRepository.findAll({
			where: {
				categoryId,
			},
		});
	}

	async createCategoryCourses(dto: CreateCategoryCoursesDto) {
		return this.categoryCoursesRepository.create(dto);
	}

	async getCategoryCourses() {
		const category = await this.categoryCoursesRepository.findAll();
		const newResponse = [];
		for (const item of category) {
			const countCourses = await this.getCountCoursesInCategory(item.id);
			newResponse.push({ ...item.dataValues, countCourses: countCourses });
		}
		return newResponse;
	}

	async getCountCoursesInCategory(id: number) {
		return await this.coursesRepository.count({ where: { categoryId: id } });
	}
}
