import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RiStarSLine } from "react-icons/ri";
import Loading from "../components/Loading";
import Error from "./Error";

const key = import.meta.env.VITE_API_KEY;
const api = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";

const Watch = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState({});

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response1 = await fetch(url, {
        method: "GET",
        headers: {
          "X-API-KEY": key,
          "Content-Type": "application/json",
        },
      });
      if (!response1.ok) {
        throw new Error(`Ошибка: ${response1.status}`);
      }
      const result1 = await response1.json();
      setMovie(result1);

      setError({ show: false, msg: "" });
    } catch (err) {
      setError({ show: true, msg: err.message || "Произошла ошибка" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(`${api}${id}`);
  }, []);

  if (isLoading) return <Loading />;

  if (error.show) return <Error msg={error.msg} />;

  return (
    <section className="my-5">
        <div className="relative h-[30vh] lg:h-[40vh] w-5/6 mx-auto text-slate-300">
        <img src={movie.coverUrl} className="w-full h-full object-cover object-center 
        opacity-30 rounded-lg" alt="background" />
        <h2 className="absolute bold top-4 sm:top-1/3 text-center">
            {movie.shortDescription}</h2> 
        </div>
     {/* информация о фильме  */}
      <div className="my-7 flex flex-col lg:flex-row items-center gap-5 lg:px-5">
      <img src={movie.posterUrl} className="w-[300px] rounded-md" alt="poster" />
     
           <div className="flex flex-col gap-4 text-zinc-400 px-8 sm:px-16 lg:px-24">
           <h3 className="bold text-center text-gray-200">{movie.nameRu}</h3> 
           <p className="text-center mb-4 text-zinc-300">{movie.description}</p>
           <div className="flex items-center gap-1 text-yellow-400">
           <RiStarSLine />
           <i>{movie.ratingKinopoisk}</i>
           </div>
           <div>
            <i className="text-zinc-600 font-medium">Год</i>
           <p>{movie.year}</p> 
           </div>
           <div>
           <i className="text-zinc-600 font-medium">Жанры</i>
           <div className="flex gap-1 flex-wrap">
           {movie.genres.map((item) => {
                return <p key={item.genre}>
                    {item.genre} 
                </p>
            })}
           </div>
           </div>
           <div>
           <i className="text-zinc-600 font-medium">Страны</i> 
           <div className="flex gap-1 flex-wrap">
           {movie.countries.map((item) => {
                return <p key={item.country}>
                    {item.country}
                </p>
            })}
           </div>
            </div>
           </div>
      </div>

    </section>
  );
};

export default Watch;
