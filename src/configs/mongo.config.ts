// import { ConfigService } from '@nestjs/config';
// import { MongooseModuleOptions } from '@nestjs/mongoose';

// export const getMongoConfig = async (
// 	configService: ConfigService,
// ): Promise<MongooseModuleOptions> => {
// 	return {
// 		uri: getMongoUriString(configService),
// 	};
// };
//
// const getMongoUriString = (configService: ConfigService): string => {
// 	return (
// 		'mongodb://' +
// 		configService.get('MONGO_LOGIN') +
// 		':' +
// 		configService.get('MONGO_PASSWORD') +
// 		'@' +
// 		configService.get('MONGO_HOST') +
// 		':' +
// 		configService.get('MONGO_PORT') +
// 		'/' +
// 		configService.get('MONGO_AUTHDATABASE')
// 	);
// };
