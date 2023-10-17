import { Types } from 'mongoose';

export class AddCourseUserDto {
	userId: Types.ObjectId;
	courseId: Types.ObjectId;
}
