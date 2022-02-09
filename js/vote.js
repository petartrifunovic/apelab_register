///////////////////////////////////////
//Data
const voteArr = [
  {
    id: 1,
    imgSrc: '../img/profile_img.jpg',
    imgAlt: 'Brave Doge',
    name: 'Brave Doge',
    symbol: 'Brave',
    marketPrice: '$0.004567',
    marketCap: 'Presale',
    launched: 'In 2 days',
    chain: 'BSC',
    votes: '50502',
  },
  {
    id: 2,
    imgSrc: '../img/profile_img.jpg',
    imgAlt: 'Gummy Bear',
    name: 'Gummy Bear',
    symbol: 'GBEAR',
    marketPrice: '0.451127',
    marketCap: '$3,334,410',
    launched: 'In 6 days',
    chain: 'BSC',
    votes: '34699',
  },
  {
    id: 3,
    imgSrc: '../img/profile_img.jpg',
    imgAlt: 'DKYC',
    name: 'DKYC',
    symbol: 'DKYC',
    marketPrice: '/',
    marketCap: '/',
    launched: 'In 3 days',
    chain: 'BSC',
    votes: '2102',
  },
];

const promotedConteiner = document.querySelector('.vote-promoted');
const allTimeContainer = document.querySelector('.vote-all-time');

const displayVote = function (vote) {
  vote.forEach(function (el) {
    const html = `
          <div class="vote">
              <div class="vote__number">${el.id}</div>
              <img src="${el.imgSrc}" alt="${el.imgAlt}" class="vote__img" />
              <h3 class="vote__name">${el.name}</h3>
              <div class="vote__chain">${el.chain}</div>
              <div class="vote__symbol">${el.symbol}</div>
              <div class="vote__market-cap">${el.marketCap}</div>
              <div class="vote__market-price">${el.marketPrice}</div>
              <div class="vote__launched">${el.launched}</div>
              <div class="vote__votes">${el.votes}</div>
              <button class="btn btn--primary">Vote</button>
          </div>
          `;

    promotedConteiner.insertAdjacentHTML('beforeend', html);
    allTimeContainer.insertAdjacentHTML('beforeend', html);
  });
};

displayVote(voteArr);
