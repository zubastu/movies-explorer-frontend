export default class Client {
  constructor(url) {
    this._url = url;
  }
  _checkPromise(promise) {
    return promise.then((res) => {
      return res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}, ${res.message}`);
    });
  }

  get(type) {
    if (type === "movies") {
      const promise = fetch(this._url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json: charset=utf-8",
        },
      });
      return this._checkPromise(promise);
    }

    const promise = fetch(`${this._url}${type}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json: charset=utf-8",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return this._checkPromise(promise);
  }
  post() {}
  patch() {}
  delete() {}
}
