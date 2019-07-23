/* eslint
    indent: [2, 2],
    semi: [2, "always"],
*/
const API_ENDPOINT = process.env.API_URL;
const DEFAULT_HEADERS = { "Content-Type": "application/json" };

function callEndpoint(method, pathWithStartingSlash, bodyObject = {}) {
  return new Promise((resolve, reject) => {
    const url = `${API_ENDPOINT}${pathWithStartingSlash}`;
    fetch(url, {
      method,
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(bodyObject),
    })
      .then(response => response.json())
      .then(resolve)
      .catch(err => reject(err.message || err));
  });
}

export default {
  get: path => callEndpoint("GET", path),
  post: (path, body) => callEndpoint("POST", path, body),
};
