'use client'

import { Container } from '@/assets/GlobalStyles'

import CategoryBlock from './blocks/category-block/CategoryBlock'
import SortBar from './blocks/SortBar'
import ProductList from './blocks/product-list-block/ProductList'

type Props = {}

export default function HomePage({}: Props) {
	return (
		<Container>
      <SortBar />
			<CategoryBlock />
      <ProductList />
		</Container>
	)
}
