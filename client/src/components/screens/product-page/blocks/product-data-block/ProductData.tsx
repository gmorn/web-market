import MainButton from '@/components/UI/button/MainButton'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	.content-block {
		display: flex;
		flex-direction: column;
		gap: 10px;

    span {
      font-weight: 600;
    }
	}
  
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`

type Props = {}

export default function ProductData({}: Props) {
	return (
		<Container>
			<div className='content-block'>
				<h3>Адрес</h3>
				<p>г. Челябинск, пр. Победы 14-а</p>
			</div>
			<div className='content-block'>
				<h3>Характеристики</h3>
				<p>
					Состояние:
					<span> Новое</span>
				</p>
				<p>
					Тип:
					<span> Картинг</span>
				</p>
			</div>
			<div className='content-block'>
				<h3>Описание</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className='bottom'>
				<p>Размещено: 20 февраля 2024</p>
				<MainButton>Пожаловаться</MainButton>
			</div>
		</Container>
	)
}
