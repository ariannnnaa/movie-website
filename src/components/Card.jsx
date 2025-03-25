import { Link } from "react-router-dom"

const Card = ({kinopoiskId,posterUrl, nameRu,countries, year}) => {
 
    return (
    <Link to={`/watch/${kinopoiskId}`} 
    className="relative w-[200px] group cursor-pointer">
    
    <img className="w-full" src={posterUrl} alt="poster" />
    <h3 className="mt-2 text-gray-300">{nameRu || 'В ожидании'}</h3>
    
    {/* информация  */}
    <div className="absolute w-full h-full top-0 bg-black opacity-0 effect 
    group-hover:opacity-80 flex flex-col justify-center items-center gap-6 font-medium">
    <p>год: {year}</p>
    <div className="text-center">
        <p>Производство: </p>
    {countries.map((item) => {
        return <p key={item.country}>
            {item.country}
        </p>
    })}
    </div>
    </div>
 
    </Link>
  )
}

export default Card
