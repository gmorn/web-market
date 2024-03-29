import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { IUser } from 'src/types/types'
import { Response } from 'express'

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(password: string, phone: string): Promise<any> {
		const user = await this.userService.findOne(phone)
		if (user) {
			const passwordIsMatch = await argon2.verify(user.password, password)
			if (passwordIsMatch) {
				return user
			} else {
				throw new UnauthorizedException('Не верный пароль')
			}
		}
		throw new UnauthorizedException(
			'Пользователя с таким номером не существует'
		)
	}

	async login(user: IUser, response: Response) {
		const { id, phone } = user
		const token = this.jwtService.sign({ id, phone })
		response.cookie('token', token)
		return {
			id,
			phone
		}
	}
}
