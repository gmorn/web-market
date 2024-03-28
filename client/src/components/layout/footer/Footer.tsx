'use client'

import { Container } from '@/assets/GlobalStyles'
import odnoklassniki from '@/assets/images/footer/odnoklassniki.svg'
import Telegram from '@/assets/images/footer/telegram.svg'
import Vk from '@/assets/images/footer/vk.svg'
import Youtube from '@/assets/images/footer/youtube.svg'
import FormTextarea from '@/components/UI/input/FormTextarea'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MainButton from '../../UI/button/MainButton'
import FormInput from '../../UI/input/FormInput'
import { FooterContainer, FooterContent } from './styles'

type Props = {}

export default function Footer({}: Props) {
	const pathname = usePathname()
	return !pathname.startsWith('/auth') ? (
		<>
			<FooterContainer>
				<Container>
					<FooterContent>
						<div className='column'>
							<h3>WebMarket</h3>
							<div className='images'>
								<Image src={Telegram} alt='telegram' />
								<Image src={Vk} alt='vk' />
								<Image src={Youtube} alt='youtube' />
								<Image src={odnoklassniki} alt='ok' />
							</div>
						</div>
						<div className='column'>
							<h4>Партнерам</h4>
							<div className='list'>
								<p>Продавайте на WebMarket</p>
								<p>Водителям</p>
								<p>Курьерам</p>
								<p>Перевозчикам</p>
							</div>
						</div>
						<div className='column'>
							<h4>Покупателям</h4>
							<div className='list'>
								<p>Как сделать заказ</p>
								<p>Доставка</p>
								<p>Возврат товара</p>
								<p>Возврат денежных средств</p>
								<p>Правила продажи</p>
								<p>
									Правила пользования торговой
									<br />
									площадкой
								</p>
							</div>
						</div>
						<div className='column'>
							<h4>Компания</h4>
							<div className='list'>
								<p>О нас</p>
								<p>Реквизиты</p>
								<p>Пресс-центр</p>
								<p>Контакты</p>
							</div>
						</div>
						<form action=''>
							<h4>Обнаружили ошибку? Сообщите о ней.</h4>
							<FormInput placeholder='Ваш email' />
							<FormTextarea placeholder='Описание проблемы' />
							<div className='button'>
								<MainButton>Отправить</MainButton>
							</div>
						</form>
					</FooterContent>
				</Container>
			</FooterContainer>
		</>
	) : null
}
