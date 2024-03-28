"use client"

import React from 'react'
import styled from 'styled-components'

const Container = styled.form`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	width: 400px;
	${(props) => props.theme.shadow.drop}
	border-radius: 12px;
`

type Props = {}

export default function SignIn({}: Props) {
  return (
    <Container>
      
    </Container>
  )
}