import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

interface UserCreateAttr {
	email: string;
	password: string;
	phone?: string;
	firstName: string;
	lastName: string;
}

@Table({ tableName: 'users' })
export class Users extends Model<Users, UserCreateAttr> {
	@Column({ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ type: DataTypes.STRING })
	email: string;

	@Column({ type: DataTypes.STRING })
	password: string;

	@Column({ type: DataTypes.STRING, allowNull: true })
	phone: string;

	@Column({ type: DataTypes.STRING })
	firstName: string;

	@Column({ type: DataTypes.STRING })
	lastName: string;
}
