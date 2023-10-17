import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { UsersCourses, UsersCoursesSchema } from './models/users-courses.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: User.name, schema: UserSchema },
			{
				name: UsersCourses.name,
				schema: UsersCoursesSchema,
			},
		]),
	],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
