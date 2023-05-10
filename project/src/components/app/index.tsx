import { Routes, Route } from 'react-router-dom';
import AddReview from '../../pages/add-review';
import Main from '../../pages/main';
import Film from '../../pages/film';
import MyList from '../../pages/my-list';
import Player from '../../pages/player';
import SignIn from '../../pages/signin';
import NotFoundPage from '../not-found';
import ProtectedRoute from '../protected-route';
import { FilmType } from '../../types';

type AppProps = {
  filmsToShow: FilmType[];
  promoToShow: FilmType;
  liklyFilmsToShow: FilmType[];
};

function App({ filmsToShow, promoToShow, liklyFilmsToShow }: AppProps): JSX.Element {

  return(
    <Routes>
      <Route
        path='/mylist'
        element={
          <ProtectedRoute
            element={<MyList filmsOnMyList={filmsToShow}/>}
            loggedIn
          />
        }
      />
      <Route path='/' element={<Main filmsOnMain={filmsToShow} promoOnMain={promoToShow}/>}/>
      <Route path='/films/:id' element={<Film choosenFilms={filmsToShow} liklyFilms={liklyFilmsToShow}/>}/>
      <Route path='films/:id/review' element={<AddReview choosenFilms={filmsToShow}/>}/>
      <Route path='/player/:id' element={<Player choosenFilms={filmsToShow}/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
    </Routes>
  );


}

export default App;
