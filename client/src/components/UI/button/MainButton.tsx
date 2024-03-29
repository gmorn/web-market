import styled from 'styled-components'

const Button = styled.button`
	padding: 10px 15px;
	border: none;
	cursor: pointer;
	border-radius: 12px;
	background: ${(props) => props.theme.color.white};
	${(props) => props.theme.hover}

	&:disabled {
		opacity: 0.5;
		cursor: default;
		
		&:hover {
			transform: none;
			box-shadow: none;
		}
	}
`

type Props = {
	children: string
	disabled?: boolean
	onClick?: () => void
}

export default function MainButton({ children, onClick, disabled }: Props) {
	return (
		<Button onClick={onClick} disabled={disabled}>
			<p>{children}</p>
		</Button>
	)
}
