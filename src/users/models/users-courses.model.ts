import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Users } from './users.model';
import { Courses } from '../../courses/models/courses.model';

interface UsersCoursesCreateAttr {
	userId: number;
	courseId: number;
}

@Table({ tableName: 'users_courses', timestamps: true })
export class UsersCourses extends Model<UsersCourses, UsersCoursesCreateAttr> {
	@Column({ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true })
	id: number;

	@ForeignKey(() => Users)
	@Column({ type: DataTypes.INTEGER })
	userId: number;

	@ForeignKey(() => Courses)
	@Column({ type: DataTypes.INTEGER })
	courseId: number;

	@BelongsTo(() => Users)
	user: Users;

	@BelongsTo(() => Courses)
	course: Courses;
}
