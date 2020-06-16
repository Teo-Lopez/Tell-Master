import axios from "axios";

class choicesService {
  constructor() {
    this.baseURL = `${process.env.REACT_APP_API}/choices/`;
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getChoicesFromChapter(id) {
    return this.service
      .get(`/?chapterId=${id}`)
      .then((res) => res.data.choicesFound)
      .catch((err) => console.log(err));
  }

  createChoice({ description, trial, successTargetChapter, failureTargetChapter, pxGranted }) {
    return this.service
      .post("", { description, trial, successTargetChapter, failureTargetChapter, pxGranted })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  deleteChoice(choiceId) {
    return this.service
      .delete("", { choiceId })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}

export default choicesService;
