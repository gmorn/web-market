import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class AppService {
	async getHello(): Promise<any> {
		try {
			const response = await axios.get(
				'https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia'
			)
			return response.data
		} catch (error) {
			// Обработка ошибок
			console.error('Ошибка при получении данных:', error)
			throw error
		}
	}
}
