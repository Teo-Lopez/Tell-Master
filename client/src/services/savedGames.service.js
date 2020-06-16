import axios from "axios";

class gamesService {
  constructor() {
    this.baseURL = `${process.env.REACT_APP_API}/savedGames/`;
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getUserSaves(userId) {
    return this.service
      .get(`/?userId=${userId}`)
      .then((res) => res.data.savedGamesFound)
      .catch((err) => console.log(err));
  }

  createSavedGame({ gameId, currentChapter, character }) {
    return this.service
      .post("", {
        gameId,
        currentChapter,
        character,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  updateSavedGame({ savedGameId, gameId, currentChapter, character }) {
    return this.service.patch("", { savedGameId, gameId, currentChapter, character }).then((res) => res.data);
  }

  deleteSave(savedGameId) {
    return this.service
      .delete("", { savedGameId })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}

export default gamesService;
