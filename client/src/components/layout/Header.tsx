'use client'

import { Container } from '@/assets/GlobalStyles'
import Chat from '@/assets/images/header/chat.svg'
import Favorite from '@/assets/images/header/favorite.svg'
import Pin from '@/assets/images/header/pin.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const HeaderContent = styled.div`
	margin-top: 30px;
	${(props) => props.theme.shadow.inner}
	border-radius: 12px;
	padding: 0 10px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${(props) => props.theme.color.black};
	position: relative;

	.navbar {
		display: flex;
		gap: 10px;

		.block {
			height: 36px;
			min-width: 36px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			border-radius: 12px;
			cursor: pointer;
			${(props) => props.theme.hover}

			&.city {
				padding: 0 7px;
			}
		}
	}

	.logo {
		position: absolute;
		cursor: pointer;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.user {
		height: 36px;
		display: flex;
		align-items: center;
		padding: 0 10px;
		border-radius: 12px;
		cursor: pointer;
		${(props) => props.theme.hover}
	}
`

type Props = {}

export default function Header({}: Props) {
	const pathname = usePathname()

	return !pathname.startsWith('/auth') ? (
		<>
			<Container>
				<HeaderContent>
					<div className='navbar'>
						<div className='block'>
							<Image src={Favorite} alt={'favorite'} />
						</div>
						<div className='block'>
							<Image src={Chat} alt={'chat'} />
						</div>
						<div className='block city'>
							<Image src={Pin} alt={'pin'} />
							<h4>г. Челябинск</h4>
						</div>
					</div>
					<div className='logo'>
						<h3>WebMarket</h3>
					</div>
					<Link href='/auth/account'>
						<div className='user'>
							<h4>Войти</h4>
						</div>
					</Link>
				</HeaderContent>
			</Container>
		</>
	) : null
}
