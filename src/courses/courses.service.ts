import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Courses, CoursesDocument } from './models/courses.model';
import { Model, Types } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
	constructor(@InjectModel(Courses.name) private coursesModel: Model<CoursesDocument>) {}

	async createCourse(dto: CreateCourseDto) {
		return this.coursesModel.create(dto);
	}

	async getCourseById(id: Types.ObjectId) {
		return this.coursesModel.findById(id);
	}
}
