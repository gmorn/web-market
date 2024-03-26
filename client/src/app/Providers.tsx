'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../assets/GlobalStyles'
import { theme } from '../assets/theme'
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry'

type Props = {
	children: React.ReactNode
}

export default function Providers({ children }: Props) {
	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</StyledComponentsRegistry>
	)
}
