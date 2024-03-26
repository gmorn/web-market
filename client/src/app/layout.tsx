import Header from '@/components/layout/Header'
import Footer from '@/components/layout/footer/Footer'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Providers from './Providers'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '700']
})

export const metadata: Metadata = {
	title: 'Web Market',
	description: 'The best e-commerce in the world!'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Providers>
				<body className={roboto.className}>
					<Header />
					{children}
					<Footer />
				</body>
			</Providers>
		</html>
	)
}
