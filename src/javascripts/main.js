import 'bootstrap';
import '../styles/main.scss';

import data from './helpers/data/planets';
import list from './components/planetCard/planetCard';

const init = () => {
  const planets = data.getPlanets();
  list.planetListEvents();
  list.createPlanetCard(planets);
};

init();
