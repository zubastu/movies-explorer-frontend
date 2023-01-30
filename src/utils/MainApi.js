import Client from "./Client";

export default class MainApi {
  constructor(client) {
    this._client = client;
  }
  // Блок для работы с пользователем
  register(name, email, password) {
    const authData = { name, email, password };
    return this._client.postAuth("/signup", authData);
  }
  login(email, password) {
    const authData = { email, password };
    return this._client.postAuth("/signin", authData);
  }
  patchUserInfo(email, name) {
    const userPatchInfo = { email, name };
    return this._client.patch("/users/me", userPatchInfo);
  }
  authorization() {
    return this._client.get("/users/me");
  }
  // Блок для работы с фильмами
  getSavedMovies() {
    return this._client.get("/movies");
  }
  createMovie(movieInfo) {
    return this._client.post("/movies", movieInfo);
  }
  deleteMovie(id) {
    return this._client.delete(`/movies/${id}`);
  }
}

const client = new Client(
  "https://api.ilya-makhin.ru/"
);

export const mainApi = new MainApi(client);
