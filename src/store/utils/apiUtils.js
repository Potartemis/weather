import axios from "axios";

const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

export default function apiRequest(
  apiEndpoint,
  parameters,
  commit,
  commitName
) {
  return axios
    .get(`https://ai-weather-by-meteosource.p.rapidapi.com/${apiEndpoint}`, {
      params: parameters,
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    })
    .then((result) => {
      commit(commitName, result);
    })
    .catch((error) => console.error(error));
}