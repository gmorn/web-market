import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './user.dto'

@Controller('user')
export class UserController {
	@Post('sign-in')
	async signIn(@Body() dto: AuthDto) {}

	@Post('sign-up')
	async signUp() {}

	@Post('sign-out')
	async signOut() {}
}
