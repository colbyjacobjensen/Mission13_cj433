import './App.css';
import HomePage from './Home';
import MovieCollection from './MovieCollection';
import Podcasts from './Podcast';

function App() {
  return (
    <div className="App">
      <HomePage />
      <br />
      <br />
      <Podcasts />
      <br />
      <br />
      <MovieCollection />
    </div>
  );
}

export default App;
