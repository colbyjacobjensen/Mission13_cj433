import './App.css';
import HomePage from './Home';
import MovieCollection from './MovieCollection';
import Podcasts from './Podcast';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Podcast" element={<Podcasts />} />
          <Route path="/MovieCollection" element={<MovieCollection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
