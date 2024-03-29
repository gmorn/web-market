import styled from 'styled-components'

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

  span {
    font-weight: 500;
    &:hover {
      text-decoration: underline;
		}
  }

	.button-block {
		display: flex;
		justify-content: end;
		width: 100%;
		align-items: center;
	}
`
