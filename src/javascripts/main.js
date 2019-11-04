import 'bootstrap';
import '../styles/main.scss';

import list from './components/planetCard/planetCard';
import singleCard from './components/singlePlanetCard/singlePlanetCard';

const init = () => {
  list.createPlanetCard();
  list.hoverPlanets();
  singleCard.clickForSingleCard();
  singleCard.closePlanetCard();
};

init();
