import { collections } from "../data/data";
import Collection from "../components/Collection";

const Movies = () => {
  return (
    <div>
      <h1 className="text-center my-16 text-red-400">
        Коллекции фильмов
        </h1>
      {collections.movies.map((collection) => {
        return <Collection key={collection.title} {...collection} />;
      })}
    </div>
  );
};

export default Movies;
