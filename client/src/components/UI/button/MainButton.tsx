import styled from 'styled-components'

const Button = styled.button`
	padding: 10px 15px;
	border: none;
	cursor: pointer;
	border-radius: 12px;
	background: ${(props) => props.theme.color.white};
	${props => props.theme.hover}
`

type Props = {
	children: string
	disabled?: boolean
	onCLick?: () => void
}

export default function MainButton({ children }: Props) {
	return (
		<Button>
			<p>{children}</p>
		</Button>
	)
}
