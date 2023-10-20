import { SequelizeModuleOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';
import { ConfigService } from '@nestjs/config';
import { Users } from '../users/models/users.model';
import { Courses } from '../courses/models/courses.model';
import { UsersCourses } from '../users/models/users-courses.model';

export const getPostgresConfig = async (config: ConfigService): Promise<SequelizeModuleOptions> => {
	return {
		dialect: 'postgres',
		models: [Users, Courses, UsersCourses],
		host: config.get('POSTGRES_HOST'),
		username: config.get('POSTGRES_USERNAME'),
		password: config.get('POSTGRES_PASSWORD'),
		database: config.get('POSTGRES_DATABASE'),
		port: config.get('POSTGRES_PORT'),
		autoLoadModels: true,
		synchronize: true,
	};
};
