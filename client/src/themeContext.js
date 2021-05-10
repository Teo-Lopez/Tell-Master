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
		greenish: '#33819E1F',
		green: '#339E4D',
		darkGreen: '#1c5044',
		dark: '#17252A',
		darkBlue: '#33819E1F',
		brown: '#9E6A33',
		darkBrown: '#522F0A'
	},
	spacings: {
		xs: '3px',
		s: '6px',
		m: '12px',
		l: '18px',
		xl: '24px'
	},
	sizes: {
		navBarHeight: '70px',
		getFullMain: function () {
			return `calc(100vh - ${this.navBarHeight})`
		}
	}
}
