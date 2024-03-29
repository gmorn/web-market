'use client'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AuthFormContainer from '../AuthFormContainer'
import { SignInContainer } from './styles'
import FormInput from '@/components/UI/input/FormInput'
import Link from 'next/link'
import MainButton from '@/components/UI/button/MainButton'
import UserService from '@/services/userService'
import Loader from '@/components/UI/loader/Loader'

type Props = {}

export default function SignIn({}: Props) {
	const [user, setUser] = useState({
		phone: { value: '', isValid: false },
		password: { value: '', isValid: false }
	})

	const [loading, setLoading] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [disabled, setDisabled] = useState(true)

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
		setPhoneError(false)
		setPasswordError(false)
		if (
			user.phone.isValid ||
			user.password.isValid ||
			user.password.value === '' ||
			user.phone.value === ''
		) {
			setDisabled(true)
		} else {
			setDisabled(false)
		}
	}, [user])

	const auth = async () => {
		setLoading(true)
		const response = await UserService.login({
			phone: user.phone.value,
			password: user.password.value
		})
		if (response.status === 201) {
		} else if (response.status === 401) {
			if (
				response.data.message === 'Пользователя с таким номером не существует'
			) {
				setPhoneError(true)
			} else if (response.data.message === 'Не верный пароль') {
				setPasswordError(true)
			}
		}
		setLoading(false)
	}

	return (
		<AuthFormContainer>
			{loading && <Loader />}
			<SignInContainer>
				<h3>Вход</h3>
				<FormInput
					placeholder='Номер телефона'
					value={user.phone.value}
					onChange={handlePhone}
					type='tel'
					label={
						phoneError
							? 'Пользователя с таким номером нет'
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
					label={
						passwordError
							? 'Не верный пароль'
							: 'Пароль должен быть больше 6 символов'
					}
					errorStatus={passwordError ? passwordError : user.password.isValid}
				/>

				<p>
					Нет аккаунта?
					<Link href='/auth/sign-up'>
						<span>Зарегистрироваться</span>
					</Link>
				</p>

				<div className='button-block'>
					<MainButton onClick={auth} disabled={disabled}>
						Войти
					</MainButton>
				</div>
			</SignInContainer>
		</AuthFormContainer>
	)
}
