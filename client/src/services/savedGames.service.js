import axios from 'axios'

class savedGamesService {
	constructor() {
		this.baseURL = `${process.env.REACT_APP_API}/savedGames/`
		this.service = axios.create({ baseURL: this.baseURL, withCredentials: true })
	}

	getUserSaves(userId, gameId) {
		const query = gameId ? `/user/?userId=${userId}&gameId=${gameId}` : `/user/?userId=${userId}`

		return this.service
			.get(query)
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	getAllSaves(userId) {
		const query = `/user/all/?userId=${userId}`

		return this.service
			.get(query)
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	getFullSave(saveId) {
		return this.service
			.get(`/full/?saveId=${saveId}`)
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	createSavedGame({ gameId, currentChapter, character }) {
		return this.service
			.post('', {
				game: gameId,
				currentChapter,
				character,
			})
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	assignSaveToUser(userId, saveId) {
		return this.service
			.post('/assign', { userId, saveId })
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	updateSavedGame({ savedGameId, gameId, currentChapter, character, finished }) {
		return this.service.patch('', { savedGameId, game: gameId, currentChapter, character, finished }).then(res => res.data)
	}

	deleteSave(savedGameId) {
		return this.service
			.delete('', { savedGameId })
			.then(res => res.data)
			.catch(err => console.log(err))
	}
}

export default savedGamesService
