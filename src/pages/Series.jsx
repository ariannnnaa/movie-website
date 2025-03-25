import { collections } from "../data/data";
import Collection from "../components/Collection";

const Series = () => {
    return (
        <div>
       <h1 className="text-center my-16 text-red-400">
        Коллекции сериалов
        </h1>
      {collections.series.map((collection) => {
        return <Collection key={collection.title} {...collection} />;
      })}
        </div>
    );
}

export default Series;
