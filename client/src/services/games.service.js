import axios from "axios";

class gamesService {
  constructor() {
    this.baseURL = "http://localhost:5000/api/games/";
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getOneGame(id) {
    return this.service
      .get(`/?gameId=${id}`)
      .then((res) => res.data.gameFound)
      .catch((err) => console.log(err));
  }

  getLastGames() {
    return this.service
      .get("/last?limit=5")
      .then((res) => res.data.gamesFound)
      .catch((err) => console.log(err));
  }

  createGame({ creator, title, minLevel, description }) {
    return this.service
      .post("", { creator, title, minLevel, description })
      .then((res) => res.data.createdGame)
      .catch((err) => console.log(err));
  }
}

export default gamesService;
