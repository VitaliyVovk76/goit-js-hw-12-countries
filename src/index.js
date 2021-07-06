import './sass/main.scss';
import countryTemplateTpi from './hendelbars/countryCard.hbs';

const inputEl = document.querySelector('.js-search-form');
const cardContainerEl = document.querySelector('.js-card-container');

function searchQuery(nameCoutry) {
  return fetch(`https://restcountries.eu/rest/v2/name/${nameCoutry}`).then(responce =>
    responce.json(),
  );
  // .then(obj => obj);
}

inputEl.addEventListener('input', onSearch);

function onSearch(e) {
  e.preventDefault();
  const valInput = e.currentTarget.elements.query.value;

  searchQuery(valInput).then(makeRender);
}

function renderCountryCard(country) {
  const markup = countryTemplateTpi(country);
  //вставляем разметку
  cardContainerEl.innerHTML = markup;
}

function renderCountryList() {}

function makeRender(obj) {
  console.log(`length: ${obj.length}`);
  if (obj.length === 1) {
    renderCountryCard(obj);
    return;
  }
  if (obj.length >= 2 && obj.length <= 10) {
  }
}
