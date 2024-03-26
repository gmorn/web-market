import styled, { css } from 'styled-components'

interface format {
	format: boolean
}

export const ProductItemContainer = styled.div<format>`
	${(props) => (props.format ? css`` : css``)}

	display: flex;

	${(props) =>
		props.format
			? css`
					width: 220px;
					flex-direction: column;
			  `
			: css`
					width: 580px;
					height: 180px;
			  `}

	overflow: hidden;
	border-radius: 12px;
	${(props) => props.theme.hover}

	.image {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			${(props) =>
				props.format
					? css`
							width: 220px;
							height: 240px;
					  `
					: css`
							width: 180px;
							height: 180px;
					  `}
		}

		.more-image {
			${(props) =>
				props.format
					? css`
							width: 220px;
							height: 240px;
					  `
					: css`
							width: 180px;
							height: 180px;
					  `}
			position: absolute;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.5);
			display: none;
			align-items: center;
			justify-content: center;

			h4 {
				text-align: center;
				color: ${(props) => props.theme.color.white};
			}

			&.active {
				display: flex;
			}
		}

		.dots {
			${(props) =>
				props.format
					? css`
							margin-top: -18px;
					  `
					: css`
							margin-top: -18px;
					  `}

			display: flex;
			align-items: center;
			justify-content: center;
			gap: 8px;

			.dot {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 8px;
				width: 8px;
				background: ${(props) => props.theme.color.white};
				border-radius: 10px;
				padding: 0;

				.dot-content {
					padding: 0;
					display: none;
					height: 80%;
					width: 80%;
					border-radius: 3px;
					background: ${(props) => props.theme.color.black};

					&.active {
						display: block;
					}
				}
			}
		}
	}

	img {
		object-fit: cover;
	}

	.content {
		padding: 10px;
		padding-top: 15px;
    width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		${(props) => (props.format ? css`` : css`
    
    `)}

		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;

			img {
				cursor: pointer;
			}
		}

		.bottom {
			display: flex;
			justify-content: space-between;
			opacity: 0.5;
      margin-top: auto;
		}
	}
`
