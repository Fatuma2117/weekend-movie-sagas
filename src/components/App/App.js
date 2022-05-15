import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieForm from '../MovieForm/MovieForm'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Link to="/">Home</Link>
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
