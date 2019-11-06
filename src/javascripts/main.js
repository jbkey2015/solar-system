import 'bootstrap';
import '../styles/main.scss';

import list from './components/planetCard/planetCard';
import singleCard from './components/singlePlanetCard/singlePlanetCard';
import search from './components/searchBar/searchBar';


const init = () => {
  list.createPlanetCard();
  list.hoverPlanets();
  singleCard.clickForSingleCard();
  singleCard.closePlanetCard();
  search.searchFilter();
};

init();
