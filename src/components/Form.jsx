import { useRef } from "react";
import { useSearchContext } from "../context/useSearchContext";
import { FcSearch } from "react-icons/fc"; // значок поиска

const Form = () => {
    const title = useRef('');
    const {setKeyWord} = useSearchContext();
  
    const handleSearch = (e) => {
     e.preventDefault();
     if(title.current.value.trim()){
        setKeyWord(title.current.value);
     }
     title.current.value = '';
     return;
    }

  return <form onSubmit={handleSearch} className="w-full sm:w-10/12 bg-white text-black p-3 my-8
 rounded-md flex justify-between">
    <input type="text" ref={title} placeholder="Поиск фильмов и сериалов"
    className="bg-transparent w-11/12 outline-none"/>
    <button type="submit">
    <FcSearch />
    </button>
  </form>;
};

export default Form;
