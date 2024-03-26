import TestImageZero from '@/assets/images/for-test/test-image-0.jpg'
import TestImageOne from '@/assets/images/for-test/test-image-1.jpg'
import FavoriteFalse from '@/assets/images/home-page/product-list/product-item/favorite-false.svg'
import FavoriteTrue from '@/assets/images/home-page/product-list/product-item/favorite-true.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ProductItemContainer } from './styles'

type Props = {
	format: boolean
}

export default function ProductItem({ format }: Props) {
	const [images, _] = useState([
		TestImageZero,
		TestImageOne,
		TestImageZero,
		TestImageOne,
		TestImageZero,
		TestImageOne
	])

	const [favState, setFavState] = useState(false)

	const [activeImage, setActiveImage] = useState(0)

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const mouseX = event.nativeEvent.offsetX
		const newIndex = Math.floor(
			(mouseX / (format ? 220 : 166)) * (images.length > 5 ? 5 : images.length)
		)
		setActiveImage(newIndex)
	}

	const handleMouseLeave = () => {
		setActiveImage(0)
	}

	return (
		<ProductItemContainer format={format}>
			<Link href={`product/${'1'}`}>
				<div
					className='image'
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				>
					<Image src={images[activeImage]} alt={'test image'} />
					<div
						className={`more-image ${
							activeImage === (images.length > 5 ? 4 : images.length) &&
							'active'
						}`}
					>
						<h4>
							Ещё
							<br />
							{images.length - 4} фото
						</h4>
					</div>
					<div className='dots'>
						{images.slice(0, 5).map((_, index) => (
							<div className='dot'>
								<div
									className={`dot-content ${index === activeImage && 'active'}`}
								></div>
							</div>
						))}
					</div>
				</div>
			</Link>
			<div className='content'>
				<div className='top'>
					{format ? <h3>1 000 ₽</h3> : <h2>1 000 ₽</h2>}
					<Image
						onClick={() => setFavState(!favState)}
						src={favState ? FavoriteTrue : FavoriteFalse}
						alt='false'
					/>
				</div>
				{format ? (
					<p>Название товарной позиции</p>
				) : (
					<h4>Название товарной позиции</h4>
				)}

				<div className='bottom'>
					{format ? (
						<>
							<p>Город</p>
							<p>00.00.00, 00:00</p>
						</>
					) : (
						<>
							<h4>Город</h4>
							<h4>00.00.00, 00:00</h4>
						</>
					)}
				</div>
			</div>
		</ProductItemContainer>
	)
}
