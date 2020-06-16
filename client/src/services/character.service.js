import axios from "axios";

class characterService {
  constructor() {
    this.baseURL = `${process.env.REACT_APP_API}/characters/`;
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getCharactersFromUser(userId) {
    return this.service
      .get(`/?userId=${userId}`)
      .then((res) => res.data.characters)
      .catch((err) => console.log(err));
  }

  createCharacter(character) {
    return this.service
      .post("", { character })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  assignCharacterToUser(userId, characterId) {
    return this.service
      .post("assign", { userId, characterId })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}

export default characterService;
