import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
	width: 100%;
	padding: 15px;
	border: none;
	outline: none;
	${(props) => props.theme.typography.p}
  border-radius: 12px;
  ${props => props.theme.shadow.inner}
	background: none;
`

type Props = {
  placeholder: string
  value?: string
  onChange?: (value: string) => void
}

export default function FormInput({ placeholder }: Props) {
	return <Input placeholder={placeholder} /> 
}