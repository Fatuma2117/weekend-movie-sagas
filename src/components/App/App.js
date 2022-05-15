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
        <Link to="/MovieForm">Movie Form</Link>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
          <Link to="/">Home</Link>
          <MovieDetails />
        </Route>
        <Route path="/MovieForm" exact>
        <Link to="/">Home</Link>
          <MovieForm />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
