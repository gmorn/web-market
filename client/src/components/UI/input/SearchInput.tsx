import Search from '@/assets/images/home-page/sort-bar/search.svg'
import Image from 'next/image'
import styled from 'styled-components'

const InputContainer = styled.div`
	position: relative;
	width: 100%;

	input {
		width: 100%;
		height: 50px;
		padding: 0 20px;
		border: none;
		outline: none;
		${(props) => props.theme.typography.h4}
		border-radius: 12px;
		${(props) => props.theme.shadow.inner}
		background: none;
	}

	img {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 20px;
		opacity: 0.6;
	}
`

type Props = {
	placeholder: string
	value?: string
	onChange?: (value: string) => void
}

export default function SearchInput({ placeholder }: Props) {
	return (
		<InputContainer>
			<input placeholder={placeholder} />
			<Image src={Search} alt='Search' />
		</InputContainer>
	)
}
