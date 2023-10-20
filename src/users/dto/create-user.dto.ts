export class CreateUserDto {
	readonly email: string;
	readonly password: string;
	readonly phone?: string;
	readonly firstName: string;
	readonly lastName: string;
}
