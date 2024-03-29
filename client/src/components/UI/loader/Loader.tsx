import React from 'react'
import LoaderOne from '@/assets/images/loader/Loader_one.svg'
import LoaderTwo from '@/assets/images/loader/Loader_two.svg'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

type Props = {}

const loadingSpinnerSize = '33px'

const spinAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

const LoaderContainer = styled.div`
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 70px;
		width: 70px;
		border-radius: 12px;
		${(props) => props.theme.shadow.drop}
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}

	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: ${(props) => props.theme.color.white};
		opacity: 0.7;
	}
`

const LoadingSpinner = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${loadingSpinnerSize};
	height: ${loadingSpinnerSize};

	img {
		&:first-child {
			animation: ${spinAnimation} 1s linear infinite;
		}
		position: absolute;
	}
`

export default function Loader({}: Props) {
	return (
		<LoaderContainer>
			<div className='bg'></div>
			<div className='content'>
				<LoadingSpinner>
					<Image src={LoaderOne} alt='loader' />
					<Image src={LoaderTwo} alt='loader' />
				</LoadingSpinner>
			</div>
		</LoaderContainer>
	)
}
