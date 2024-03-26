import CategoryOne from '@/assets/images/home-page/product-list/category-1.svg'
import CategoryTwo from '@/assets/images/home-page/product-list/category-2.svg'
import Image from 'next/image'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import ProductItem from './product-item/ProductItem'

interface format {
	format: boolean
}

const Container = styled.div<format>`
	margin: 15px 0;
	padding: 15px;
	${(props) => props.theme.shadow.inner}
	border-radius: 12px;
	overflow: hidden;

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.category {
			display: flex;
			gap: 10px;

			img {
				cursor: pointer;

				${(props) =>
					props.format
						? css`
								&:first-child {
									opacity: 0.7;
								}
						  `
						: css`
								&:last-child {
									opacity: 0.7;
								}
						  `}
			}
		}
	}

	.list {
		display: grid;
		${(props) =>
			props.format
				? css`
						grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
				  `
				: css`
						grid-template-columns: 1fr 1fr;
				  `}
		gap: 30px;
		margin-top: 15px;
	}
`

type Props = {}

export default function ProductList({}: Props) {
	const [format, setFormat] = useState(false)

	return (
		<Container format={format}>
			<div className='title'>
				<h2>Новые объявления</h2>
				<div className='category'>
					<Image src={CategoryOne} onClick={() => setFormat(false)} alt='one' />
					<Image src={CategoryTwo} onClick={() => setFormat(true)} alt='two' />
				</div>
			</div>
			<div className='list'>
				{[...Array(8)].map((_, index) => (
					<ProductItem format={format} key={index} />
				))}
			</div>
		</Container>
	)
}
