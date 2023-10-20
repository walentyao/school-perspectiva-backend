import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

interface CategoryCoursesCreateAttr {
    name: string;
    backColor: string;
}

@Table({ tableName: 'category_courses', timestamps: true })
export class CategoryCourses extends Model<CategoryCourses, CategoryCoursesCreateAttr> {
    @Column({ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataTypes.STRING })
    name: string;

    @Column({ type: DataTypes.STRING })
    backColor: string;
}