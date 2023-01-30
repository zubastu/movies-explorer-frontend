import Client from "./Client";

export default class MoviesApi {
  constructor(client) {
    this._client = client;
  }

  getMovies() {
    return this._client.get("movies");
  }
}

const client = new Client("https://api.nomoreparties.co/beatfilm-movies");
export const moviesApi = new MoviesApi(client);
