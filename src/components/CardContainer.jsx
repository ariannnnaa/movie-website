import { useState } from "react"
import useFetch from "../utils/useFetch";
import ReactPaginate from "react-paginate";
// comonents 
import Loading from "../components/Loading";
import Error from "../pages/Error";
import Card from "./Card";

const CardContainer = ({query}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const { data, isLoading, error } = useFetch(query,currentPage);
    const pages = data.totalPages;
    
  const handlePages = (e) => {
  setCurrentPage(e.selected);
  }
  
  if(isLoading) return <Loading />;

  if (error.show) return <Error msg={error.msg} />;

    return (
    <section className="my-6">
        {/* контент */}
      <div className="grid justify-center mb-12 justify-items-center sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {data.items.map((item) => {
            return <Card key={item.kinopoiskId} {...item}/>
        })}
      </div>
      {/* пагинация */}
           <ReactPaginate 
           pageCount={pages}
           onPageChange={handlePages}
           forcePage={currentPage}
           previousLabel="<"
           nextLabel=">"
           containerClassName='flex gap-5 sm:gap-12 justify-center flex-wrap sm:text-lg'
           nextClassName='border px-2 border-black rounded-sm bg-black hover:bg-gray-900 text-white'
           previousClassName='border px-2 border-black rounded-sm bg-black hover:bg-gray-900 text-white'
           pageClassName='border px-3 border-black rounded-sm bg-black hover:bg-gray-900 text-white'
           disabledClassName='hidden'
           activeClassName='bg-gray-700 border-gray-400'
           /> 
    </section>
  )
}

export default CardContainer
