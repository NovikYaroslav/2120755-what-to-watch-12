import CatalogList from '../../../components/catalog-list';
import { useState } from 'react';
import { genres } from '../../../utils/data';

function Catalog(): JSX.Element {
  const[choseenGenre, setChoosenGenre] = useState('All genres');

  function handleChoosenGenre(choosen: string) {
    setChoosenGenre(choosen);
  }
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li onClick={() => handleChoosenGenre(genre)} className={`catalog__genres-item ${choseenGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>))}
      </ul>
      <CatalogList amountToShow={20}/>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}
export default Catalog;