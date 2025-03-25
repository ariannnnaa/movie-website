import { useParams } from "react-router-dom";
import { menus } from "../data/data";
import CardContainer from "../components/CardContainer";

const SeriesGenres = () => {
  const category = useParams();
  const currentCategory = menus[1].submenus.find((item) => item.value === category.genre).title;
  const query = `?${category.genre}&order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=2025`;

  return (
    <div>
      <h1 className="text-center my-5 text-blue-300">
        Сериалы по категориям:
        </h1>
      <h2 className="text-center my-10 text-blue-200 font-serif">
        {currentCategory}
      </h2>
      <CardContainer query={query} />
    </div>
  );
};

export default SeriesGenres;
