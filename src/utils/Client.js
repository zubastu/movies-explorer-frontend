export default class Client {
  constructor(url) {
    this._url = url;
  }
  _checkPromise(promise) {
    return promise.then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
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

  post(type) {
    const promise = fetch(`${this._url}${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json: charset=utf-8",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return this._checkPromise(promise);
  }

  patch(type, data) {
    const promise = fetch(`${this._url}${type}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json: charset=utf-8",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(data),
    });
    return this._checkPromise(promise);
  }

  delete(type) {
    const promise = fetch(`${this._url}${type}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json: charset=utf-8",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return this._checkPromise(promise);
  }

  postAuth(type, data) {
    console.log(data);
    const promise = fetch(`${this._url}${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json: charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    return this._checkPromise(promise);
  }
}
