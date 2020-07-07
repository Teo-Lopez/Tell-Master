import axios from "axios";

class gamesService {
  constructor() {
    this.baseURL = `${process.env.REACT_APP_API}/games/`;
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getOneGame(id) {
    return this.service
      .get(`/?gameId=${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  getByTitle(name) {
    return this.service
      .get(`/title?title=${name}`)
      .then((res) => (res.data ? res.data : []))
      .catch((err) => console.log(err));
  }

  getOwnedGames(id) {
    return this.service
      .get(`/owned?creatorId=${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  getLastGames() {
    return this.service
      .get("/last?limit=5")
      .then((res) => res.data.gamesFound)
      .catch((err) => console.log(err));
  }

  createGame({ creator, title, minLevel, description, simple }) {
    return this.service
      .post("", { creator, title, minLevel, description, simple })
      .then((res) => res.data.createdGame)
      .catch((err) => console.log(err));
  }
}

export default gamesService;
