'use client'

import TestImage from '@/assets/images/for-test/test-image-0.jpg'
import Arrow from '@/assets/images/universal/arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {}

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

	h3 {
		margin-bottom: 20px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 15px;

		.user {
			display: flex;
			${(props) => props.theme.hover}
			border-radius: 12px;
			padding: 10px;
			cursor: pointer;

			.user-logo {
				height: 55px;
				width: 55px;
				object-fit: cover;
				border-radius: 50%;
			}

			.data {
				padding: 5px 15px;
				display: flex;
				gap: 7px;
				flex-direction: column;

				span {
					font-weight: 600;
				}
			}
		}
	}

  p {
    margin-top: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default function Account({}: Props) {
	return (
		<Container>
			<Link href='/'>
				<div className='back-button'>
					<Image src={Arrow} alt='arrow' />
				</div>
			</Link>
			<h3>Вход</h3>
			<div className='list'>
				<div className='user'>
					<Image src={TestImage} alt='user logo' className='user-logo' />
					<div className='data'>
						<h4>
							<span>Руслан</span>
						</h4>
						<h4>+7 (000) 000-00-00</h4>
					</div>
				</div>
				<div className='user'>
					<Image src={TestImage} alt='user logo' className='user-logo' />
					<div className='data'>
						<h4>
							<span>Руслан</span>
						</h4>
						<h4>+7 (000) 000-00-00</h4>
					</div>
				</div>
			</div>
			<Link href='/auth/sign-in'><p>Другой аккаунт</p></Link>
		</Container>
	)
}
