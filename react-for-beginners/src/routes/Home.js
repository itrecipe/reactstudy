import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";


function Home() {
//[loading(data), setLoading(수정할 수 있는 함수)]
//useEffect 나의 component가 시작할 때만 어떤 코드를 딱 한번만 실행시키고 싶을때 사용
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    
    //then 방식보다 요즘은 이 방식을 더 많이 쓴다고 한다.
    const json = await (
       await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
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
    <div class={styles.container}>
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id} //키값을 주는것은 매우중요함
            id={movie.id} //여기서 props로 id값을 전달해야 detail에서 원하는 아이디 값에 페이지를 찾아갈 수 있음
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

export default Home;