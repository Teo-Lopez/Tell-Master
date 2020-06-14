import axios from "axios";

class gamesService {
  constructor() {
    this.baseURL = "http://localhost:5000/api/choices/";
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getChoicesFromChapter(id) {
    return this.service
      .get(`/?chapterId=${id}`)
      .then((res) => res.data.choicesFound)
      .catch((err) => console.log(err));
  }

  createChoice({ chapterId, description, trial, successTargetChapter, failureTargetChapter, pxGranted }) {
    return this.service
      .post("", { chapterId, description, trial, successTargetChapter, failureTargetChapter, pxGranted })
      .then((res) => res.data.createdChoice)
      .catch((err) => console.log(err));
  }
}

export default gamesService;
