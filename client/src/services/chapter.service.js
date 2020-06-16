import axios from "axios";

class gamesService {
  constructor() {
    this.baseURL = `${process.env.REACT_APP_API}/chapters/`;
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getChaptersFromGame(id) {
    return this.service
      .get(`/?gameId=${id}`)
      .then((res) => res.data.chaptersFound)
      .catch((err) => console.log(err));
  }

  createChapter({ description, choices, gameId }) {
    return this.service
      .post("", { description, choices, gameId })
      .then((res) => res.data.createdChapter)
      .catch((err) => console.log(err));
  }
}

export default gamesService;
