import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

interface CoursesCreateAttr {
	name: string;
	price: number;
}

@Table({ tableName: 'courses', timestamps: true })
export class Courses extends Model<Courses, CoursesCreateAttr> {
	@Column({ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ type: DataTypes.STRING })
	name: string;

	@Column({ type: DataTypes.FLOAT })
	price: number;

	@Column({ type: DataTypes.DATE })
	createdAt: string;
}
