import $ from 'jquery';
import './searchBar.scss';

const planetFilter = (e) => {
  const value = $(e.target).val().toLowerCase();
  const planets = $('.planets');
  planets.hide();
  if (value !== '') {
    planets.filter(`[class*='${value}']`).show();
  } else {
    planets.show();
  }
};

const searchFilter = () => $(document).ready(() => {
  $('#myInput').on('keyup', (e) => {
    planetFilter(e);
  });
});

export default { searchFilter };
