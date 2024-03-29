'use client'

import TestImage from '@/assets/images/for-test/test-image-0.jpg'
import Trash from '@/assets/images/universal/trash.svg'

import Image from 'next/image'
import Link from 'next/link'
import { AccountContainer } from './styles'
import AuthFormContainer from '../AuthFormContainer'

type Props = {}

export default function Account({}: Props) {
	return (
		<AuthFormContainer>
			<AccountContainer>
				<h3>Аккаунты</h3>
				<div className='list'>
					<div className='item'>
						<div className='user'>
							<Image src={TestImage} alt='user logo' className='user-logo' />
							<div className='data'>
								<h4>
									<span>Руслан</span>
								</h4>
								<h4>+7 (000) 000-00-00</h4>
							</div>
						</div>
						<div className='delete-image'>
							<Image src={Trash} alt='trash' />
						</div>
					</div>
				</div>
				<div>
					<Link href='/auth/sign-in'>
						<p>Другой аккаунт</p>
					</Link>
				</div>
			</AccountContainer>
		</AuthFormContainer>
	)
}
