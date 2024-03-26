import styled from 'styled-components'

import Apartment from '@/assets/images/home-page/category/apartment.jpg'
import Cars from '@/assets/images/home-page/category/cars.jpg'
import Garden from '@/assets/images/home-page/category/garden.jpg'
import Hobby from '@/assets/images/home-page/category/hobby.jpg'
import Instruments from '@/assets/images/home-page/category/instruments.jpg'
import Pets from '@/assets/images/home-page/category/pets.jpg'
import Technique from '@/assets/images/home-page/category/technique.jpg'
import Trash from '@/assets/images/home-page/category/trash.jpg'

export const HomePageCategory = styled.div`
  padding: 15px;
  margin-top: 15px;
  ${props => props.theme.shadow.inner}
  border-radius: 12px;
  display: flex;
  gap: 15px;

	.block {
    display: flex;
    gap: 15px;
    flex-direction: column;

		.line {
      display: flex;
      gap: 15px;

			.category {
				position: relative;
				background-size: cover;
				height: 260px;
        border-radius: 12px;
        cursor: pointer;
        ${props => props.theme.hover}

				&.small {
					width: 260px;
				}

				&.big {
					width: 327px;
				}

				.title {
					border-radius: 12px;
					background: ${(props) => props.theme.color.white};
					padding: 10px 15px;
					position: absolute;
				}
			}
		}
	}
	.item-1 {
		background-image: url(${Cars.src});

		.title {
			bottom: 15px;
			right: 15px;
		}
	}
	.item-2 {
		background-image: url(${Apartment.src});
		.title {
			top: 15px;
			left: 15px;
		}
	}
	.item-3 {
		background-image: url(${Instruments.src});
		.title {
			bottom: 15px;
			left: 15px;
		}
	}
	.item-4 {
		background-image: url(${Pets.src});
		.title {
			bottom: 15px;
			right: 15px;
		}
	}
	.item-5 {
		background-image: url(${Hobby.src});
		.title {
			bottom: 15px;
			left: 15px;
		}
	}
	.item-6 {
		background-image: url(${Technique.src});
		.title {
			top: 15px;
			right: 15px;
		}
	}
	.item-7 {
		background-image: url(${Garden.src});
		.title {
			top: 15px;
			right: 15px;
		}
	}
	.item-8 {
		background-image: url(${Trash.src});
		.title {
			bottom: 15px;
			left: 15px;
		}
	}
`
