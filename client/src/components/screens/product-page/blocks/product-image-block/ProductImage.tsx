import TestImageZero from '@/assets/images/for-test/test-image-0.jpg'
import TestImageOne from '@/assets/images/for-test/test-image-1.jpg'
import Image from 'next/image'
import { useState } from 'react'
import { ProductImageContainer } from './styles'

type Props = {}

export default function ProductImage({}: Props) {
	const [images, _] = useState([
		TestImageZero,
		TestImageOne,
		TestImageZero,
		TestImageOne,
		TestImageZero,
		TestImageOne,
		TestImageZero,
		TestImageOne,
		TestImageZero,
		TestImageOne
	])

	const [activeImage, setActiveImage] = useState(0)

	return (
		<ProductImageContainer>
			<Image
				src={images[activeImage]}
				alt='active-image'
				className='main-image'
			/>
			<div className='image-list'>
				{images.map((item, index) => (
					<Image
						src={item}
						alt='image'
						key={index}
						onClick={() => setActiveImage(index)}
            className={index === activeImage ? 'active' : ''}
					/>
				))}
			</div>
		</ProductImageContainer>
	)
}
