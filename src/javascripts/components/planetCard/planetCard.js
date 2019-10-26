import $ from 'jquery';
import './planetCard.scss';

import util from '../../helpers/utlities';
import data from '../../helpers/data/planets';


const createPlanetCard = () => {
  const planet = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planet.length; i += 1) {
    domString += '<div class="card" style="width: 18rem;">';
    domString += `<img src="${planet[i].imageUrl}" class="card-img-top" alt="...">`;
    domString += '<div class="card-body">';
    domString += `<p class="card-text">${planet[i].name}</p>`;
    domString += '</div>';
    domString += '</div>';
  }
  util.printToDom('planet-container', domString);
};

const planetListEvents = () => {
  $('body').on('mouseenter', '.card', (e) => {
    $(e.target).children().removeClass('hide');
  });

  $('body').on('mouseleave', '.card', (e) => {
    $(e.target).children().addClass('hide');
  });

  $('body').on('click', '.card', () => {
    util.printToDom('planet-container', '');
    util.printToDom('description-container', '.descript');
  });
};


export default { createPlanetCard, planetListEvents };
