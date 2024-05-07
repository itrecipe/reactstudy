import { useEffect, useState } from "react";

function App() {
  //[loading(data), setLoading(수정할 수 있는 함수)]
  //useEffect 나의 component가 시작할 때만 어떤 코드를 딱 한번만 실행시키고 싶을때 사용
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

  return <div>{loading ? <h1>Loading...</h1> : <div>
    {movies.map(movie =>
    
    )}
    </div>
    }
    </div>;
}

export default App;