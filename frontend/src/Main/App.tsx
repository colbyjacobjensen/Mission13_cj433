import './App.css';
import HomePage from '../Home';
import MovieList from '../MovieList';
import Podcasts from '../Podcast';
import Navbar from '../Navbar';
import { Route, Routes } from 'react-router-dom';
import MovieCollection from '../MovieCollection';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Podcast" element={<Podcasts />} />
          <Route path="/MovieList" element={<MovieList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
