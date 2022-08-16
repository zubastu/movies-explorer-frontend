import Client from "./Client";

export default class MainApi {
  constructor(client) {
    this._client = client;
  }
}

const client = new Client(
  "https://api.movies.explorer.zubastu.nomoredomains.xyz/"
);

export const mainApi = new MainApi(client);
