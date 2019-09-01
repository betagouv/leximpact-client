const API_ENDPOINT = process.env.API_URL;
const DEFAULT_HEADERS = { "Content-Type": "application/json" };
const DEFAULT_API_ERROR_MESSAGE = "Une erreur est survenue";

const METHOD_GET_VERB = "GET";
const METHOD_POST_VERB = "POST";

const HTTP_SUCCESS_STATUS = [200, 201];

function callEndpoint(method, pathWithStartingSlash, bodyObject = {}) {
  return new Promise((resolve, reject) => {
    const url = `${API_ENDPOINT}${pathWithStartingSlash}`;
    const body = method === METHOD_GET_VERB ? null : JSON.stringify(bodyObject);
    fetch(url, { body, headers: DEFAULT_HEADERS, method })
      .then((response) => {
        const responseIsSuccess = HTTP_SUCCESS_STATUS.indexOf(response.status) !== -1;
        if (responseIsSuccess) return response.json();
        throw new Error(DEFAULT_API_ERROR_MESSAGE);
      })
      .then((payload) => {
        const hasError = !payload || payload.Error;
        return hasError
          ? reject(payload.Error || "Unable to perform request")
          : resolve(payload);
      })
      .catch(err => reject(err.message || err));
  });
}

export default {
  get: path => callEndpoint(METHOD_GET_VERB, path),
  post: (path, body) => callEndpoint(METHOD_POST_VERB, path, body),
};
