import { useEffect } from "react";
import { useParams } from "react-router-dom"; //url에 있는 값을 반환해주는 함수 useParams()

function Detail() {
    const { id } = useParams()
    
    //싱크해줄 함수가 있어야 한다.
    const getMovie = async () => {
        const json = await( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
    }

    useEffect(() => {
       getMovie();
    }, [])

    return <h1>Detail</h1>
}

export default Detail;