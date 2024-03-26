'use client'

import { Container } from '@/assets/GlobalStyles'
import styled from 'styled-components'
import ProductData from './blocks/product-data-block/ProductData'
import ProductImage from './blocks/product-image-block/ProductImage'
import UserData from './blocks/user-data-block/UserData'

const Content = styled.div`
	display: flex;
	gap: 15px;
	margin: 15px 0;
	align-items: start;

	.block {
		width: 100%;
		padding: 15px;
		${(props) => props.theme.shadow.inner}
		border-radius: 12px;
		display: flex;
    flex-direction: column;
		gap: 15px;
	}
`

type Props = {}

export default function ProductPage({}: Props) {
	return (
		<Container>
			<Content>
				<div className='block'>
					<ProductImage />
					<ProductData />
				</div>
				<div className='block'>
					<UserData />
				</div>
			</Content>
		</Container>
	)
}
