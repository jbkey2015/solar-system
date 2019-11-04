import $ from 'jquery';
import util from '../../helpers/utlities';
import planetData from '../../helpers/data/planets';
import createPlanetList from '../planetCard/planetCard';
import './singlePlanetCard.scss';


const singlePlanetCard = (singlePlanet) => {
  let domString = '';
  const planetList = planetData.getPlanets();
  for (let i = 0; i < planetList.length; i += 1) {
    const name = planetList[i].name.toLowerCase();
    if (singlePlanet === `${planetList[i].name}`) {
      domString = `
      <div class=" planet-singleCard text-center ${name}">
         <button class="close d-flex justify-content-end" style="color:red;">X</button>
         <h2>${planetList[i].name}</h2>
         <img src="${planetList[i].imageUrl}"/>
         <h5>Is it made of gas? = ${planetList[i].isGasPlanet}</h5>
         <h5>Number of moons = ${planetList[i].numberOfMoons}</h5>
         <h5> Name Of Largest Moon = ${planetList[i].nameOfLargestMoon}</h5>
         <p>${planetList[i].description}</p>
     </div>
        `;
    }
  }
  util.printToDom('single-planet-card', domString);
};

const clickForSingleCard = () => {
  $('.card-body').on('click', (event) => {
    const singlePlanet = event.target.id;
    singlePlanetCard(singlePlanet);
    util.printToDom('planet-container', '');
  });
};

const closePlanetCard = () => {
  $('body').on('click', '.close', () => {
    util.printToDom('single-planet-card', '');
    createPlanetList.createPlanetList();
    createPlanetList.hoverFunc();
    clickForSingleCard();
  });
};

export default { clickForSingleCard, closePlanetCard };
