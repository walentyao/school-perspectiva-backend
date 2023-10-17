import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoursesDocument = HydratedDocument<Courses>;

@Schema({ timestamps: true })
export class Courses {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	price: number;

	@Prop({ required: false })
	createdAt: string;
}

export const CoursesSchema = SchemaFactory.createForClass(Courses);
