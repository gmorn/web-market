import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		font-family: 'Roboto', sans-serif !important;

		color: ${props => props.theme.color.black};

		-ms-overflow-style: none !important;
		&::-webkit-scrollbar { width: 0; }

  }
	
  body {
		background: ${props => props.theme.color.white};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

	h1 {
		${(props) => props.theme.typography.h1}
	}

	h2 {
		${(props) => props.theme.typography.h2}
	}

	h3 {
		${(props) => props.theme.typography.h3}
	}

	h4 {
		${(props) => props.theme.typography.h4}
	}

	p {
		${(props) => props.theme.typography.p}
	}
`

export const Container = styled.div`
	width: 1250px;
	margin: 0 auto;

	${(props) => props.theme.mediaQueries.fullScreen} {
		width: 900px;
	}

	${(props) => props.theme.mediaQueries.tablet1000} {
		width: 738px;
	}

	${(props) => props.theme.mediaQueries.tablet768} {
		width: 451px;
	}

	${(props) => props.theme.mediaQueries.mobile480} {
		width: 303px;
	}
`
