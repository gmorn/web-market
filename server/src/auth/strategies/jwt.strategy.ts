import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { IUser } from 'src/types/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req) => {
					return req?.cookies?.token // Извлекаем токен из куки
				}
			]),
			ignoreExpiration: false,
			secretOrKey: configService.get('JWT_SECRET_KEY')
		})
	}

	async validate(user: IUser) {
		return { id: user.id, phone: user.phone }
	}
}
