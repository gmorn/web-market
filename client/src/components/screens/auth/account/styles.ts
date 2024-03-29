import styled from "styled-components";

export const AccountContainer = styled.div`
	h3 {
		margin-bottom: 20px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 15px;

		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			${(props) => props.theme.hover}
			border-radius: 12px;
			padding: 10px;
			cursor: pointer;

			.delete-image {
				opacity: 0;
				cursor: pointer;
				transition: 300ms;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        border-radius: 40px;
				${(props) => props.theme.hover}

        img {
          width: 25px;
          height: 25px;
        }
      }

			&:hover {
				.delete-image {
					opacity: 1;
				}
			}
		}

		.user {
			display: flex;
			.user-logo {
				height: 55px;
				width: 55px;
				object-fit: cover;
				border-radius: 50%;
			}

			.data {
				padding: 5px 15px;
				display: flex;
				gap: 7px;
				flex-direction: column;

				span {
					font-weight: 600;
				}
			}
		}
	}

	p {
		margin-top: 15px;
    width: 110px;

		&:hover {
			text-decoration: underline;
		}
	}
`
