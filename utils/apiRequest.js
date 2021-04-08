const baseURL = `http://${config.development.host}:${config.development.port}`;

function apiRequest(method, route, body) {
  return fetch(`${baseURL}/${route}`, {
    method: method,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      return data ? JSON.parse(data) : {};
    });
}
