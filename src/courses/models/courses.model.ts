import {BelongsTo, Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
import {CategoryCourses} from "./category-courses.model";

interface CoursesCreateAttr {
    name: string;
    price: number;
}

@Table({tableName: 'courses', timestamps: true})
export class Courses extends Model<Courses, CoursesCreateAttr> {
    @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataTypes.STRING})
    name: string;

    @Column({type: DataTypes.FLOAT})
    price: number;

    @ForeignKey(() => CategoryCourses)
    @Column({type: DataTypes.INTEGER})
    categoryId: number;

    @BelongsTo(() => CategoryCourses)
    category: CategoryCourses;

    @Column({type: DataTypes.DATE})
    createdAt: string;
}
