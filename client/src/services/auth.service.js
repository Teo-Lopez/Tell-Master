import axios from "axios";

class authService {
  constructor() {
    this.baseURL = `${process.env.REACT_APP_API}/auth/`;
    this.service = axios.create({
      baseURL: this.baseURL,
      withCredentials: true,
      timeout: 1000 * 30,
      timeoutErrorMessage: "El servidor ha tardado demasiado tiempo en responder",
    });
  }

  login({ username, email, password }) {
    return this.service
      .post("login", { username, email, password }) //add form
      .then((res) => res.data)
      .catch((err) => {
        console.log({ err });
        if (err.response.status == "401") return null;
        if (err.code === "ECONNABORTED") console.error(err.message);
      });
  }

  signup({ username, email, password }) {
    return this.service
      .post("signup", { username, email, password }) //add form
      .then((res) => res.data)
      .catch((err) => {
        console.log({ err });
        if (err.code === "ECONNABORTED") console.error(err.message);
      });
  }

  logout() {
    return this.service
      .post("logout")
      .then((res) => res.data)
      .catch((err) => {
        console.log({ err });
        if (err.code === "ECONNABORTED") console.error(err.message);
      });
  }

  loggedin() {
    return this.service
      .get("loggedin")
      .then((res) => res.data)
      .catch((err) => {
        console.log({ err });
        if (err.code === "ECONNABORTED") console.error(err.message);
      });
  }
}

export default authService;
