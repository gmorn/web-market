import { hostUrl } from '@/config'
import { IUserLogin, IUserReg } from './types'
import axios, { AxiosResponse } from 'axios'
import { normalizePhoneNumber } from '@/utils/numberUtils'

export default class UserService {
	static async login(user: IUserLogin): Promise<AxiosResponse> {
		user = { ...user, phone: normalizePhoneNumber(user.phone) }
		try {
			const response = await axios.post(`${hostUrl}/auth/login`, user, {
				withCredentials: true
			})
			return response
		} catch (error: any) {
			return error.response
		}
	}

	static async reg(user: IUserReg): Promise<AxiosResponse> {
		user = { ...user, phone: normalizePhoneNumber(user.phone) }
		try {
			const response = await axios.post(`${hostUrl}/user`, user, {
				withCredentials: true
			})
			return response
		} catch (error: any) {
			return error.response
		}
	}
}
