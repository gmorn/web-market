import styled from 'styled-components'

export const UserDataContainer = styled.div`
	display: flex;
	gap: 15px;
  flex-direction: column;

	.title {
		display: flex;
		gap: 20px;
		justify-content: space-between;

		.price {
			white-space: nowrap;
		}
	}

	.user-nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 15px;

		.button {
			display: flex;
			flex-direction: column;
      justify-content: center;
			align-items: center;
			gap: 10px;
			${(props) => props.theme.shadow.drop}
			border-radius: 12px;
			padding: 10px;
      cursor: pointer;

			.status {
				display: flex;
				align-items: center;
				gap: 5px;

				.circle {
					background: #b9ddd9;
					height: 10px;
					width: 10px;
					border-radius: 5px;
				}
			}

      &.user-app {
        font-weight: 600;
        font-size: 18px;
        text-align: center;
      }
		}


		.user-data {
			display: flex;
			padding: 7px 5px;
			gap: 10px;

			.rating {
				display: flex;
				align-items: center;
				gap: 5px;
				font-weight: 400;
				font-size: 14px;

				img {
					height: 15px;
					width: 15px;
				}
			}

			.user-logo {
				border-radius: 12px;
				width: 58px;
				height: 58px;
				object-fit: cover;
			}
		}
	}
`
