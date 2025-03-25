import { Link } from 'react-router-dom';
import { MdOutlineReportGmailerrorred } from "react-icons/md"; // значок ошибки

const Error = ({msg}) => {
    return (
        <div className="fixed top-0 left-0 bg-black w-full h-full flex 
        flex-col items-center pt-80 gap-5 z-50">
           <div className="text-3xl flex gap-3">
           <MdOutlineReportGmailerrorred /> 
           <p>{msg || 'Не удалось найти страницу'}</p>
           </div>
           <Link to='/' className='underline text-gray-400'>
           Вернуться на главную страницу &#8594;
           </Link>
        </div>
    );
}

export default Error;
