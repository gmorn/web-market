import React from 'react'
import styled, { css } from 'styled-components'

interface IError {
	errorStatus: boolean
}

const InputContainer = styled.div<IError>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	input {
		width: 100%;
		padding: 15px;
		border: none;
		outline: none;
		${(props) => props.theme.typography.p}
		border-radius: 12px;
		${(props) => props.theme.shadow.inner}
		background: none;
	}

	label {
		color: ${(props) => props.theme.color.red};
		font-weight: 500;

		${(props) =>
			props.errorStatus
				? css`
						display: block;
				  `
				: css`
						display: none;
				  `}
	}
`

type Props = {
	placeholder: string
	value: string
	onChange: (value: string) => void
	errorStatus?: boolean
	label?: string
	type?: string
}

export default function FormInput({
	placeholder,
	errorStatus,
	label,
	value,
	onChange,
	type
}: Props) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value: inputValue } = e.target
		if (type === 'tel') {
			const formattedValue = formatPhoneNumber(inputValue)
			onChange(formattedValue)
		} else {
			onChange(inputValue)
		}
	}
	const formatPhoneNumber = (input: string): string => {
		let cleaned = input.replace(/\D/g, '')
		let formattedValue = ''

		if (cleaned[0] === '7' && cleaned.length > 12) {
			cleaned = cleaned.substr(0, 12)
		} else if (cleaned.length > 11) {
			cleaned = cleaned.substr(0, 11)
		}

		for (let i = 0; i < cleaned.length; i++) {
			if (i === 0 && cleaned[i] === '7') {
				formattedValue = `+${cleaned[i]}`
			} else if (i === 0 && cleaned[i] === '8') {
				formattedValue = `${cleaned[i]}`
			} else if (i === 1) {
				formattedValue += ` (${cleaned[i]}`
			} else if (i === 4) {
				formattedValue += `) ${cleaned[i]}`
			} else if (i === 7) {
				formattedValue += `-${cleaned[i]}`
			} else if (i === 9) {
				formattedValue += `-${cleaned[i]}`
			} else {
				formattedValue += cleaned[i]
			}
		}

		return formattedValue
	}

	return (
		<InputContainer errorStatus={errorStatus ? errorStatus : false}>
			<input
				value={value}
				onChange={(e) => handleChange(e)}
				placeholder={placeholder}
				type={type ? type : 'text'}
			/>
			<label>{label}</label>
		</InputContainer>
	)
}
