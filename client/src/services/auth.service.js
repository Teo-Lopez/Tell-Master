import axios from "axios";

class authService {
  constructor() {
    this.baseURL = `${process.env.REACT_APP_API}/auth/`;
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  login({ username, email, password }) {
    return this.service
      .post("login", { username, email, password }) //add form
      .then((res) => res.data)
      .catch((err) => console.log({ err }));
  }

  signup({ username, email, password }) {
    return this.service
      .post("signup", { username, email, password }) //add form
      .then((res) => res.data)
      .catch((err) => console.log({ err }));
  }

  logout() {
    return this.service
      .post("logout")
      .then((res) => res.data)
      .catch((err) => console.log({ err }));
  }

  loggedin() {
    return this.service
      .get("loggedin")
      .then((res) => res.data)
      .catch((err) => console.log({ err }));
  }
}

export default authService;
