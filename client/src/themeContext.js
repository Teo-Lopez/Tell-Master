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
		greenish: '#5DB531',
		green: '#339E4D',
		darkGreen: '#12332B',
		dark: '#17252A',
		darkBlue: '#33819E',
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
		navBarHeight: '60px',
		getFullMain: function () {
			return `calc(100vh - ${this.navBarHeight})`
		}
	}
}
