export const theme = {
	color: {
		black: '#303030',
		white: '#F6FBFF'
	},
	typography: {
		h1: `
      font-weight: 700;
      font-size: 40px;
    `,
		h2: `
      font-weight: 700;
      font-size: 30px;
    `,
		h3: `
      font-weight: 600;
      font-size: 22px;
    `,
		h4: `
      font-weight: 400;
      font-size: 18px;
    `,
		p: `
      font-weight: 500;
      font-size: 14px;
    `
	},
	mediaQueries: {
		fullScreen: '@media only screen and (max-width: 1300px)',
		tablet1000: '@media only screen and (max-width: 1000px)',
		tablet768: '@media only screen and (max-width: 768px)',
		mobile480: '@media only screen and (max-width: 480px)'
	},
	shadow: {
		inner: 'box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.07);',
		drop: 'box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);'
	},
	hover: `
		transition: 300ms;

		&:hover {
			box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
			transform: scale(1.03);
		}
	`
}
