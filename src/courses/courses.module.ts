import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Courses } from './models/courses.model';
import {CategoryCourses} from "./models/category-courses.model";

@Module({
	imports: [SequelizeModule.forFeature([Courses, CategoryCourses])],
	providers: [CoursesService],
	controllers: [CoursesController],
})
export class CoursesModule {}
