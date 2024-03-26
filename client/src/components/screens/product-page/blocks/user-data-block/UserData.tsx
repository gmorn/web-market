import TestImageOne from '@/assets/images/for-test/test-image-1.jpg'
import StarFalse from '@/assets/images/universal/star-false.svg'
import StarTrue from '@/assets/images/universal/star-true.svg'
import FormTextarea from '@/components/UI/input/FormTextarea'
import Image from 'next/image'
import { UserDataContainer } from './styles'

type Props = {}

export default function UserData({}: Props) {
	return (
		<UserDataContainer>
			<div className='title'>
				<h2>Название товарной позиции</h2>
				<h2 className='price'>10 000 ₽</h2>
			</div>
			<div className='user-nav'>
				<div className='button'>
					<h3>Позвонить</h3>
					<h4>+7 000 000 00 00</h4>
				</div>
				<div className='button'>
					<h3>Написать сообщение</h3>
					<div className='status'>
						<div className='circle'></div>
						<h4>Онлайн</h4>
					</div>
				</div>
				<div className='user-data'>
					<div className='content'>
						<p>Руслан</p>
						<div className='rating'>
							4,5
							<div className='stars'>
								<Image src={StarFalse} alt='star-false' />
								<Image src={StarFalse} alt='star-false' />
								<Image src={StarFalse} alt='star-false' />
								<Image src={StarFalse} alt='star-false' />
								<Image src={StarTrue} alt='star-true' />
							</div>
							11 отзывов
						</div>
						<p>На WebMarket с июля 2022</p>
					</div>
					<Image src={TestImageOne} alt='user-logo' className='user-logo' />
				</div>
				<div className='button user-app'>11 объявлений пользователя</div>
			</div>
			<FormTextarea placeholder='Спросите у продавца' />
		</UserDataContainer>
	)
}
