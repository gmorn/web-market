import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Arrow from '@/assets/images/universal/arrow.svg'

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	width: 400px;
	${(props) => props.theme.shadow.drop}
	border-radius: 12px;

	.back-button {
		position: absolute;
		top: 50%;
		left: -50px;
		transform: translateY(-50%);
		${(props) => props.theme.hover}
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 45px;
		width: 45px;
		cursor: pointer;

		&:hover {
			transform: translate(-10px, -50%);
		}

		img {
			opacity: 0.2;
		}
	}
`

type Props = {
	children: React.ReactNode
}

export default function AuthFormContainer({ children }: Props) {
	return (
		<Container>
			<Link href='/'>
				<div className='back-button'>
					<Image src={Arrow} alt='arrow' />
				</div>
			</Link>
			{children}
		</Container>
	)
}
