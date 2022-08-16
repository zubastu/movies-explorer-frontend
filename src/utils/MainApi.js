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
  login() {
    return this._client.post();
  }
  patchUserInfo() {
    return this._client.patch();
  }
  getUserInfo() {
    return this._client.get();
  }
  // Блок для работы с фильмами
  getSavedMovies() {
    return this._client.get();
  }
  createMovie() {
    return this._client.post();
  }
  deleteMovie() {
    return this._client.delete();
  }
}

const client = new Client(
  "https://api.movies.explorer.zubastu.nomoredomains.xyz"
);

export const mainApi = new MainApi(client);
