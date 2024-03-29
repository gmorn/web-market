import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt'
import * as cookieParser from 'cookie-parser'
import { Response } from 'express'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) readonly userRepository: Repository<User>,
		private jwtService: JwtService
	) {}

	async create(createUserDto: CreateUserDto, response: Response) {
		const existUser = await this.userRepository.findOne({
			where: {
				phone: createUserDto.phone
			}
		})
		if (existUser)
			throw new BadRequestException(
				'Пользователь с таким номером уже существует'
			)

		const user = await this.userRepository.save({
			phone: createUserDto.phone,
			password: await argon2.hash(createUserDto.password),
			name: createUserDto.name
		})

		const token = this.jwtService.sign({ id: user.id, phone: user.phone })

		response.cookie('token', token)

		return { id: user.id, phone: user.phone }
	}

	async findOne(phone: string) {
		return await this.userRepository.findOne({ where: { phone } })
	}

	async getById(id: string) {
    const userId = parseInt(id, 10)
		const user = await this.userRepository.findOne({ where: { id: userId } })
		if (user) {
			return {
				id: user.id,
				name: user.name,
				phone: user.phone,
				rating: user.rating,
				reviewCount: user.reviewCount,
				image: user.reviewCount
			}
		} else {
			throw new BadRequestException(
				'Пользователь не найден'
			)
		}
	}
}
