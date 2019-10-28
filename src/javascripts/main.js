import 'bootstrap';
import '../styles/main.scss';

import list from './components/planetCard/planetCard';

const init = () => {
  list.createPlanetList();
  list.hoverFunc();
};

init();
