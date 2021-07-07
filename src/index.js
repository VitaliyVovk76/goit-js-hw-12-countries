import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
import countryTemplateTpi from './hendelbars/countryCard.hbs';
import countryListTemplateTpi from './hendelbars/countryList.hbs';
import pnotify from './js/pnotify.js';

let debounce = require('lodash.debounce');

const inputEl = document.querySelector('.js-search-form');
const cardContainerEl = document.querySelector('.js-card-container');

inputEl.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();
  clearCardContainer();
  //работать не будет, т.к. стоит debounce()
  //   const valInput = e.currentTarget.elements.query.value;
  const valInput = e.target.value.trim();
  fetchCountries(valInput).then(makeRender);
}

function makeRender(obj) {
  console.log(`length: ${obj.length}`);
  if (obj.length === 1) {
    renderCountryCard(obj);
    return;
  }
  if (obj.length >= 2 && obj.length <= 10) {
    renderCountryList(obj);
    return;
  }
  if (obj.length > 10) {
    responseInvalidRequest();
    return;
  }
}

function renderCountryCard(country) {
  const markup = countryTemplateTpi(country);
  cardContainerEl.innerHTML = markup;
}

function renderCountryList(country) {
  const markup = countryListTemplateTpi(country);
  cardContainerEl.innerHTML = markup;
}

function responseInvalidRequest() {
  pnotify('Too many matches found. Please enter a more specific query');
}

function clearCardContainer() {
  cardContainerEl.innerHTML = '';
}
