import 'bootstrap';
import '../styles/main.scss';

import list from './components/planetCard/planetCard';

const init = () => {
  list.createPlanetCard();
  list.hoverPlanets();
};

init();
