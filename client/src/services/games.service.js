import axios from 'axios'

class gamesService {
	constructor() {
		this.baseURL = `${process.env.REACT_APP_API}`
		this.service = axios.create({
			baseURL: this.baseURL,
			withCredentials: true
		})
	}

	getOneGame(id) {
		return this.service.get(`/games?gameId=${id}`)
	}

	getByTitle(name) {
		return this.service
			.get(`/games/title?title=${name}`)
			.then(res => (res.data ? res.data : []))
			.catch(err => console.log(err))
	}

	getOwnedGames(id) {
		return this.service
			.get(`/games/owned?creatorId=${id}`)
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	getLastGames() {
		return this.service.get('/games/last?limit=5')
	}

	createGame({ creator, title, minLevel, description, simple }) {
		return this.service
			.post('/games', { creator, title, minLevel, description, simple })
			.then(res => res.data)
			.catch(err => console.log(err))
	}
}

export default gamesService
