import axios from 'axios'
import ChapterService from './chapter.service'
const chapterService = new ChapterService()

class savedGamesService {
	constructor() {
		this.baseURL = `${process.env.REACT_APP_API}/savedGames/`
		this.service = axios.create({ baseURL: this.baseURL, withCredentials: true })
	}

	getUserSaves(userId, gameId) {
		const query = gameId ? `/?userId=${userId}&gameId=${gameId}` : `/user/?userId=${userId}`

		return this.service.get(query)
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

	createSavedGame({ gameId, currentChapterId, characterId }) {
		console.log({
			gameId,
			currentChapterId,
			characterId
		})
		return this.service
			.post('', {
				gameId,
				currentChapterId,
				characterId
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
		return this.service
			.patch('', { savedGameId, game: gameId, currentChapter, character, finished })
			.then(res => res.data)
	}

	deleteSave(saveId) {
		return this.service
			.delete('', { saveId })
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	newSave(gameId, characterId) {
		return chapterService.getChaptersFromGame(gameId).then(res => {
			this.createSavedGame({
				gameId,
				currentChapterId: res.data[0]._id,
				characterId
			})
				.then(algo => console.log(algo))
				.catch(err => console.log(err))
		})
	}
}

export default savedGamesService
