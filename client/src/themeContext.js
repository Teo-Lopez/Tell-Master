/*
DARKER
#17252A	black
#2B7A78	darkGreen
#3AAFA9	green
#DEF2F1	greenish
#FEFFFF white
LIGHTER
*/
export const theme = {
	colors: {
		white: '#FEFFFF',
		greenish: '#DEF2F1',
		green: '#3AAFA9',
		darkGreen: 'darkGreen',
		dark: '#17252A'
	},
	spacings: {
		xs: '3px',
		s: '6px',
		m: '12px',
		l: '18px',
		xl: '24px'
	},
	sizes: {
		navBarHeight: '60px',
		getFullMain: function () {
			return `calc(100vh - ${this.navBarHeight})`
		}
	}
}
