import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './models/users.model';
import { UsersCourses } from './models/users-courses.model';
import { Courses } from '../courses/models/courses.model';

@Module({
	imports: [SequelizeModule.forFeature([Users, UsersCourses, Courses])],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
