import { Module } from '@nestjs/common'
import { AddressModule } from './address/address.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CategoryModule } from './category/category.module'
import { ChapterModule } from './chapter/chapter.module'
import { ChatModule } from './chat/chat.module'
import { FavoriteModule } from './favorite/favorite.module'
import { MessageModule } from './message/message.module'
import { NotificationModule } from './notification/notification.module'
import { ProductModule } from './product/product.module'
import { ReviewModule } from './review/review.module'
import { SubCategoryModule } from './sub-category/sub-category.module'
import { UserModule } from './user/user.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		UserModule,
		ProductModule,
		ReviewModule,
		ChatModule,
		MessageModule,
		ChapterModule,
		CategoryModule,
		SubCategoryModule,
		FavoriteModule,
		NotificationModule,
		AddressModule,
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('DB_HOST'),
				port: configService.get('DB_PORT'),
				username: configService.get('DB_USERNAME'),
				password: configService.get('DB_PASSWORD'),
				database: configService.get('DB_NAME'),
        synchronize: true,
        ssl: true,
        entities: [__dirname + '/**/*.entity{.js, .ts}']
			}),
      inject: [ConfigService]
		}),
		AuthModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
