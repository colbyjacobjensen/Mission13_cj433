import { useEffect, useState } from 'react';
import { Movie } from './Types/Movie';

function MovieList() {
  const [MovieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/Movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="text-center">
        <h1>Movie Collection</h1>
        <br />
      </div>

      <div>
        <table className="table">
          <thead>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </thead>
          <tbody>
            {MovieData.map((m) => (
              <tr key={m.MovieId}>
                <td>{m.Category}</td>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
                <td>{m.LentTo}</td>
                <td>{m.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
