import { useEffect, useState } from "react";
import Movie from "./components/Movie"

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    
    //then 방식보다 요즘은 이 방식을 더 많이 쓴다고 한다.
    const json = await (
       await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year`
    )
  ).json();
    
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies()
  }, []);

  console.log(movies);

  return (
    <div>
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id} //키값을 주는것은 매우중요함
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}
          />
        ))}
      </div>
    )}
  </div>
  );
}

export default App;