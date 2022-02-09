'use strict';
const nav = document.querySelector('.nav');
const navText = document.querySelectorAll('.nav__list-text');
const submenuBtn = document.querySelectorAll('.nav__list-submenu-icon');
const submenu = document.querySelectorAll('.nav__sub');

const headerContainer = document.querySelector('.header-container');
const mainContainer = document.querySelector('.main');
const body = document.querySelector('body');

const headerElOpen = document.querySelector('.header__elements-open');
const headerEl = document.querySelector('.header__elements');

const searchForm = document.querySelector('.search');

//Submenu
const navSub1Btn = document.querySelector('.nav__list-submenu-icon-nav-1');
const navSub2Btn = document.querySelector('.nav__list-submenu-icon-nav-2');
const navSub1menu = document.querySelector('.nav__sub--1');
const navSub2menu = document.querySelector('.nav__sub--2');

submenuBtn.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('nav__list-submenu-icon--rotate');
  });
});

navSub1Btn.addEventListener('click', () => {
  navSub1menu.classList.toggle('nav__sub--hidden');
  navSub2menu.classList.add('nav__sub--hidden');
  navSub2Btn.classList.remove('nav__list-submenu-icon--rotate');
});

navSub2Btn.addEventListener('click', () => {
  navSub2menu.classList.toggle('nav__sub--hidden');
  navSub1menu.classList.add('nav__sub--hidden');
  navSub1Btn.classList.remove('nav__list-submenu-icon--rotate');
});

nav.addEventListener('mouseleave', () => {
  submenu.forEach((el) => {
    el.classList.add('nav__sub--hidden');
    navSub2Btn.classList.remove('nav__list-submenu-icon--rotate');
    navSub1Btn.classList.remove('nav__list-submenu-icon--rotate');
  });
});

//Hamburger Menu
const hamburgerIcon = document.querySelector('.hamburger-menu');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('hamburger-menu__change');
  nav.classList.toggle('nav-container__active');

  headerContainer.classList.toggle('nav-container__active--small');
  mainContainer.classList.toggle('nav-container__active--small');

  body.classList.toggle('hide-elements');

  headerEl.classList.remove('header__elements-open');
  headerElOpen.classList.remove('header__elements--open-close');
});

//Header Elements
headerElOpen.addEventListener('click', () => {
  headerElOpen.classList.toggle('header__elements--open-close');
  headerEl.classList.toggle('header__elements-open');
  searchForm.classList.toggle('search__hidden');
});

//Search Btn
const searchBtn = document.querySelector('.search-btn');
const searchClose = document.querySelector('.search-btn--close');

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('.search--expand');
  searchForm.classList.remove('search__hidden');

  searchBtn.style.display = 'none';
  searchClose.classList.toggle('search-btn--hidden');
});

searchClose.addEventListener('click', () => {
  searchBtn.style.display = 'flex';
  searchClose.classList.toggle('search-btn--hidden');

  searchForm.classList.toggle('.search--expand');
  searchForm.classList.add('search__hidden');
});

//Display Results
const resultArr = [
  {
    id: 1,
    name: 'Brave Doge',
    symbol: 'Brave',
    address: '0x07510cd60d7e0ccf5e23f70c8dc4fdfb1c150b54',
  },
  {
    id: 2,
    name: 'Gummy Bear',
    symbol: 'GBEAR',
    address: '0x07510cd60d7e0ccf5e23f70c8dc4fdfb1c150b54',
  },
  {
    id: 3,
    name: 'DKYC',
    symbol: 'DKYC',
    address: '0x07510cd60d7e0ccf5e23f70c8dc4fdfb1c150b54',
  },
  {
    id: 4,
    name: 'Gummy Bear',
    symbol: 'GBEAR',
    address: '0x07510cd60d7e0ccf5e23f70c8dc4fdfb1c150b54',
  },
  {
    id: 5,
    name: 'DKYC',
    symbol: 'DKYC',
    address: '0x07510cd60d7e0ccf5e23f70c8dc4fdfb1c150b54',
  },
];

const resultContainer = document.querySelectorAll('.display-result');

const displayResult = function (result) {
  result.forEach(function (el) {
    const html = `
      <div class="display-result-box">
        <span class="display-name">${el.name}</span>
        <span class="display-symbol">${el.symbol}</span>
        <span class="display-address">${el.address}</span>
      </div>
      `;

    resultContainer.forEach((container) => {
      container.insertAdjacentHTML('beforeend', html);
    });
  });
};

displayResult(resultArr);
