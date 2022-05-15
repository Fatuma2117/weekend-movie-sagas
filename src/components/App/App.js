import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieForm from '../MovieForm/MovieForm'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Link to="/">Home/  </Link>
        <Link to="/details">Movie Details/  </Link>
        <Link to="/MovieForm">Movie Form  </Link>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <MovieDetails />
        </Route>
        <Route path="/MovieForm" exact>
          <MovieForm />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
