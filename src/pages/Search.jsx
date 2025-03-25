import { Link } from "react-router-dom";
import { useSearchContext } from "../context/useSearchContext";
import { IoCloseSharp } from "react-icons/io5"; // значок выхода
import Form from '../components/Form';
import CardContainer from "../components/CardContainer";

const Search = () => {
const {keyWord} = useSearchContext();
const query = `?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${keyWord}`;

    return (
        <div className='fixed top-0 w-full h-full backdrop-blur-sm text-white overflow-y-scroll'> 
         <Link to='/'>
          <IoCloseSharp className="absolute right-3 top-2 text-4xl cursor-pointer"/>
         </Link>
            <div className='w-11/12 lg:w-9/12 min-h-[70vh] mx-auto mt-14 
            bg-zinc-950 rounded-lg p-3 lg:p-6'>
             <h1 className='text-center my-2'>Поиск</h1>
               <Form/>
               <h2>По вашему запросу:</h2>
               <div className="my-9">
                 <CardContainer  query={query}/>
               </div>
            </div>

        </div>
    );
}

export default Search;
