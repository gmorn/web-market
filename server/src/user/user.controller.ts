import {
	Controller,
	Post,
	Body,
  UsePipes,
  ValidationPipe,
  Res,
	Get,
	Param,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { Response } from 'express'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	create(
		@Body() createUserDto: CreateUserDto,
		@Res({ passthrough: true }) response: Response
	) {
		return this.userService.create(createUserDto, response)
	}

	@Get(':id')
	getById(@Param('id') id: string) {
		return this.userService.getById(id)
	}
}
