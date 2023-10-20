import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { getPostgresConfig } from './configs/postgres.config';

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getPostgresConfig,
		}),
		UsersModule,
		CoursesModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
