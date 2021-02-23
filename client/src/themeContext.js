export const darkTheme = {
	background: {
		general: 'rgba(0,0,0, 0.9)',
		semiSolid: 'rgba(0, 0, 0, 0.7)',
		solid: 'rgba(25,25,25, 1)',
		light: 'rgba(240, 240, 240, 0.9)',
		modals: 'rgba(40, 40, 40, 1)',
		list: 'rgba(70, 70, 70, 1)',
		overlay: 'rgba(255, 255, 255, 0.1)',
		lightOverlay: 'rgba(255, 255, 255, 0.01)',
	},
	colors: {
		light: 'rgba(240, 240, 240, 0.9)',
		general: 'rgb(200, 200, 200)',
	},
	sizes: {
		navBarHeight: '60px',
		getFullMain: function () {
			return `calc(100vh - ${this.navBarHeight})`
		},
	},
}
