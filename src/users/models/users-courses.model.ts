import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from './user.model';
import { Courses } from '../../courses/models/courses.model';

export type UsersCoursesDocument = HydratedDocument<UsersCourses>;

@Schema({ timestamps: true })
export class UsersCourses {
	@Prop({ type: Types.ObjectId, ref: User.name })
	userId: User;

	@Prop({ type: Types.ObjectId, ref: Courses.name })
	courseId: Courses;
}

export const UsersCoursesSchema = SchemaFactory.createForClass(UsersCourses);
