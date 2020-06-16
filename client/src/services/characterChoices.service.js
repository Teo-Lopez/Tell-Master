import axios from "axios";

class characterChoicesService {
  constructor() {
    this.baseURL = `${process.env.REACT_APP_API}/characterChoices/`;
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  makeChoice(saveId, choiceId, characterId) {
    return this.service
      .post(`/makeChoice`, { saveId, choiceId, characterId })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}

export default characterChoicesService;
