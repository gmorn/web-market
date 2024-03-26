import Menu from '@/assets/images/home-page/sort-bar/menu.svg'
import SearchInput from '@/components/UI/input/SearchInput'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
	margin-top: 15px;
	display: flex;
	gap: 15px;
	width: 100%;

	.category {
		display: flex;
		gap: 15px;
		align-items: center;
		height: 50px;
		padding: 0 10px;
		border-radius: 12px;
		${(props) => props.theme.shadow.inner}
		cursor: pointer;
	}
`

type Props = {}

export default function SortBar({}: Props) {
	return (
		<Container>
			<div className='category'>
				<Image src={Menu} alt='menu' />
				<h4>Категории</h4>
			</div>
			<SearchInput placeholder='Поиск' />
		</Container>
	)
}
