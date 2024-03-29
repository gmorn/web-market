import { IsPhoneNumber, IsString, MinLength } from "class-validator"

export class CreateUserDto {
	@IsString()
	phone: string
	@IsString()
	name: string
	@MinLength(6, { message: 'Пароль должен быть не менее 6 символов' })
	password: string
}
