'use client'

import React, { useEffect, useState } from 'react'
import AuthFormContainer from '../AuthFormContainer'
import { SignInContainer } from '../sign-in/styles'
import { SignUpContainer } from './styles'
import FormInput from '@/components/UI/input/FormInput'
import MainButton from '@/components/UI/button/MainButton'
import Link from 'next/link'
import UserService from '@/services/userService'
import Loader from '@/components/UI/loader/Loader'

type Props = {}

export default function SignUp({}: Props) {
	const [user, setUser] = useState({
		name: { value: '', isValid: false },
		phone: { value: '', isValid: false },
		password: { value: '', isValid: false }
	})

	const [loading, setLoading] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [disabled, setDisabled] = useState(true)

	const handleName = (value: string) => {
		setUser({ ...user, name: { ...user.name, value } })
	}

	const handlePhone = (value: string) => {
		setUser((prevUser) => {
			const isValid = value.charAt(0) !== '8' && value.charAt(0) !== '+'
			return {
				...prevUser,
				phone: {
					...prevUser.phone,
					value,
					isValid
				}
			}
		})
	}

	const handlePassword = (value: string) => {
		setUser((prevUser) => {
			const isValid = value.length < 6
			return {
				...prevUser,
				password: {
					...prevUser.password,
					value,
					isValid
				}
			}
		})
	}

	useEffect(() => {
		if (
			user.phone.isValid ||
			user.password.isValid ||
			user.password.value === '' ||
			user.name.value === '' ||
			user.phone.value === ''
		) {
			setDisabled(true)
		} else {
			setDisabled(false)
		}
	}, [user])

	const reg = async () => {
		setLoading(true)
		const response = await UserService.reg({
			phone: user.phone.value,
			password: user.password.value,
			name: user.name.value
		})
		if (response.status === 201) {
		} else if (response.status === 400) {
			if (
				response.data.message === 'Пользователь с таким номером уже существует'
			) {
				setPhoneError(true)
			}
		}
		setLoading(false)
	}

	return (
		<AuthFormContainer>
			{loading && <Loader />}
			<SignUpContainer>
				<h3>Регистрация</h3>
				<FormInput
					placeholder='Ваше имя'
					value={user.name.value}
					onChange={handleName}
					label='Это поле не должно быть пустым'
					errorStatus={user.name.isValid}
				/>
				<FormInput
					placeholder='Номер телефона'
					value={user.phone.value}
					onChange={handlePhone}
					type='tel'
					label={
						phoneError
							? 'Номер уже занят'
							: user.phone.value === ''
							? 'Это поле не должно быть пустым'
							: 'Некорректный номер телефона'
					}
					errorStatus={phoneError ? phoneError : user.phone.isValid}
				/>
				<FormInput
					placeholder='Пароль'
					value={user.password.value}
					onChange={handlePassword}
					type='password'
					label='Пароль должен быть больше 6 символов'
					errorStatus={user.password.isValid}
				/>
				<p>
					Уже есть аккаунт?
					<Link href='/auth/sign-in'>
						<span> Войти</span>
					</Link>
				</p>
				<div className='button-block'>
					<MainButton onClick={reg} disabled={disabled}>
						Войти
					</MainButton>
				</div>
			</SignUpContainer>
		</AuthFormContainer>
	)
}
