import { useState } from "react";
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6"; // значок стрелочки

const DesktopMenuLink = ({title, path, submenus}) => {
    const [isHoverMenu, setIsHoverMenu] = useState(false);

const closeSubmenu = () => {
    setIsHoverMenu(false);
}

    return (
        <div
        onMouseOver={() => setIsHoverMenu(true)} 
        onMouseOut={closeSubmenu}
        onClick={closeSubmenu}>
            <Link className='flex gap-2 pb-6 items-center group' to={path} >
            {title}
            <FaAngleDown className="group-hover:rotate-180 transition-all duration-500"/>
            </Link>
         
            {/* всплывающее меню */}
           {isHoverMenu && <div className="absolute z-50 top-16 left-1/2 w-3/5 -translate-x-1/2 
           bg-gray-100 text-gray-700">
            <h3 className="text-center border-b py-5 font-bold">{title} по категориям</h3>
            <div className="grid grid-cols-3 justify-items-center py-5 gap-5 font-semibold">
                <Link to={path} className="hover:text-gray-400">Все</Link>
                {submenus.map((submenu) => {
                    return <Link key={submenu.value} to={`${path}/${submenu.value}`}
                    className="hover:text-gray-400">
                    {submenu.title}
                    </Link>
                })}
            </div>
            </div>}
        </div>
    );
}

export default DesktopMenuLink
