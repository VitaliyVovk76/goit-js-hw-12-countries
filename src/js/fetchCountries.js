const BASE_URL = 'https://restcountries.eu/rest/v2/name/';
export default function (searchQuery) {
  return fetch(`${BASE_URL}${searchQuery}`).then(responce => responce.json());
}
