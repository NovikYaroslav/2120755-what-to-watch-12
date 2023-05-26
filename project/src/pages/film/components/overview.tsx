import { useSelector } from 'react-redux';
import NotFoundPage from '../../../components/not-found/not-found';
import { ratingName } from '../../../utils/data';
import { filmToShowSelector } from '../../../store/reducers/chosenFilm';

function Overview(): JSX.Element {
  const film = useSelector(filmToShowSelector);

  if (film === undefined) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingName[Math.round(film.rating)]}</span>
          <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>
        <p className="film-card__starring"><strong>{`Starring: ${film.starring.join(', ')} and other`}</strong></p>
      </div>
    </>
  );
}
export default Overview;
