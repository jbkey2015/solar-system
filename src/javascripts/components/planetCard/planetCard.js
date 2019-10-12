
import './planetCard.scss';

import util from '../../helpers/utlities';
import data from '../../helpers/data/planets';


const createPlanetCard = () => {
  const planet = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planet.length; i += 1) {
    domString += `
    <div class="container" style="width:20rem; height:20rem;">
      <div class="card" style="width: 20rem; height: 20rem;">
        <div class="card-body">
          <h4 class="text">${planet[i].name}</h4>
        </div>
        <div class="overlay">
          <img src="${planet[i].imageUrl}" alt="Avatar" class="image">
        </div>
      </div>
    </div>
    `;
  }

  util.printToDom('planet-container', domString);
};


export default { createPlanetCard };
