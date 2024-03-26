import styled from 'styled-components'

export const ProductImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	.main-image {
		width: 640px;
		height: 470px;
		object-fit: cover;
		border-radius: 12px;
	}

	.image-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 8px;

		img {
			cursor: pointer;
			border-radius: 12px;
			width: 100px;
			height: 74px;
			${(props) => props.theme.hover}

			&.active {
        transform: scale(1.05);
      }
		}
	}
`
