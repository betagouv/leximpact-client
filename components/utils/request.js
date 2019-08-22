const API_ENDPOINT = process.env.API_URL;
const DEFAULT_HEADERS = { "Content-Type": "application/json" };
const DEFAULT_API_ERROR_MESSAGE = "Une erreur est survenue";

function callEndpoint(method, pathWithStartingSlash, bodyObject = {}) {
  return new Promise((resolve, reject) => {
    const url = `${API_ENDPOINT}${pathWithStartingSlash}`;
    fetch(url, {
      body: JSON.stringify(bodyObject),
      headers: DEFAULT_HEADERS,
      method,
    })
      .then((response) => {
        const responseIsSuccess = response.status === 200;
        if (responseIsSuccess) return response.json();
        throw new Error(DEFAULT_API_ERROR_MESSAGE);
      })
      .then(resolve)
      .catch(err => reject(err.message || err));
  });
}

export default {
  get: path => callEndpoint("GET", path),
  post: (path, body) => callEndpoint("POST", path, body),
};
