import styled from 'styled-components'

export const FooterContainer = styled.div`
	margin-top: auto;
	margin-bottom: 30px;
`

export const FooterContent = styled.div`
	border-radius: 12px;
	padding: 15px;
	display: flex;
	${(props) => props.theme.shadow.inner}
	justify-content: space-between;

	.column {
		display: flex;
		flex-direction: column;
		gap: 15px;

		h3 {
			text-align: center;
		}

		.images {
			display: flex;
			gap: 10px;
		}

		.list {
			display: flex;
			flex-direction: column;
			gap: 10px;

			p {
				cursor: pointer;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	form {
		width: 440px;
		${(props) => props.theme.shadow.drop}
		border-radius: 12px;
		padding: 15px;
		display: flex;
		flex-direction: column;
		gap: 15px;

		.button {
			display: flex;
			justify-content: end;
			width: 100%;
		}
	}
`
