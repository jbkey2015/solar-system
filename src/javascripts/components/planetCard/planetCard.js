import $ from 'jquery';
import './planetCard.scss';

import util from '../../helpers/utlities';
import data from '../../helpers/data/planets';


const createPlanetCard = () => {
  const planetCard = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planetCard.length; i += 1) {
    const name = planetCard[i].name.toLowerCase();
    domString += `
      <div class="col-4 planets ${name} ${planetCard[i].description}" style="width:20rem; height:20rem;">
        <div class="card-body planet-list" id="${planetCard[i].name}" style="width: 20rem; height: 20rem;">
          <h4 class="text">${planetCard[i].name}</h4>
          <img src="${planetCard[i].imageUrl}" class="image">
          </div>
      </div>
      `;
  }
  util.printToDom('planet-container', domString);
  $('.image').hide();
};

const hoverPlanets = () => {
  $('.card-body').mouseenter((e) => {
    const singleCard = $(e.target);
    singleCard.find('.image').show();
    singleCard.find('.text').hide();
  }); $('.card-body').mouseleave((e) => {
    const singleCard = $(e.target);
    singleCard.find('.image').hide();
    singleCard.find('.text').show();
  });
};

export default { createPlanetCard, hoverPlanets };
