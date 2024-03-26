import React from 'react'
import { HomePageCategory } from './styles'

type Props = {}

export default function CategoryBlock({}: Props) {
  return (
		<HomePageCategory>
			<div className='block'>
				<div className='line'>
					<div className='category item-1 small'>
						<div className='title'>
							<p>Транспорт</p>
						</div>
					</div>
					<div className='category item-2 big'>
						<div className='title'>
							<p>Недвижимость</p>
						</div>
					</div>
				</div>
				<div className='line'>
					<div className='category item-3 big'>
						<div className='title'>
							<p>Оборудование</p>
						</div>
					</div>
					<div className='category item-4 small'>
						<div className='title'>
							<p>Животные</p>
						</div>
					</div>
				</div>
			</div>
			<div className='block'>
				<div className='line'>
					<div className='category item-5 small'>
						<div className='title'>
							<p>Хобби и отдых</p>
						</div>
					</div>
					<div className='category item-6 big'>
						<div className='title'>
							<p>Электроника</p>
						</div>
					</div>
				</div>
				<div className='line'>
					<div className='category item-7 big'>
						<div className='title'>
							<p>Для дома и дачи</p>
						</div>
					</div>
					<div className='category item-8 small'>
						<div className='title'>
							<p>Личные вещи</p>
						</div>
					</div>
				</div>
			</div>
		</HomePageCategory>
	)
}