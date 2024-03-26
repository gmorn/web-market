import styled from 'styled-components'

const Textarea = styled.textarea`
	resize: none;
	height: 100px;
	padding: 15px;
	${(props) => props.theme.typography.p}
	border: none;
	outline: none;
	${(props) => props.theme.shadow.inner}
	border-radius: 12px;
	background: none;
`

type Props = {
	placeholder: string
	value?: string
	onChange?: (value: string) => void
}

export default function FormTextarea({ placeholder }: Props) {
	return <Textarea placeholder={placeholder} />
}
