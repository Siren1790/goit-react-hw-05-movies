import { useEffect, useState} from "react"
import { useParams} from 'react-router-dom';
import { getCredits } from "ApiService/apiService";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    useEffect(() => {
        (async function fetchData() {
          try {
            setIsloading(true);
            const data = await getCredits(movieId);
            setCast(data.cast)
          } catch (err) {
            console.log(err.message);
          } finally {
            setIsloading(false)
          }
        })();
      }, [movieId]);
    return (
        <>
        {isLoading && <div>Loading....</div>}
        <h3>В Ролях</h3>
        {cast.map(({id, original_name, profile_path, character}) => (
            <div key={id}>
                <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt={""} />
                <p>{character} --- {original_name}</p>
            </div>
        ))}
        </>
        
    )
}
export default Cast;