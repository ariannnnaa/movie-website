import { useState } from 'react';
import { Link} from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6"; // значок стрелочки 

const MobileMenuLink = ({title,path,submenus,closeMenu}) => {
 const [isVisible, setIsVisible] = useState(false);
 
 const handleSubmenus = () => {
    setIsVisible(!isVisible);
 }

 return (
      <div>
           <div className='flex justify-evenly items-center  md:mb-5 pb-2
            border-b font-bold bg-gray-50'
           onClick={handleSubmenus}>
            <p>{title} по категориям</p>
            <FaAngleDown className={`${isVisible && 'rotate-180'}`} />
           </div>
           
           {/* подменю */}
              {isVisible && <div className='grid grid-cols-2 md:grid-cols-3 gap-2 justify-items-center
              font-semibold pt-3'
              onClick={closeMenu}>
                <Link to={path}>Все</Link>
                {submenus.map((submenu) => {
                    return <Link key={submenu.value} to={`${path}/${submenu.value}`}>
                       {submenu.title}
                    </Link>
                })}
                </div>}
      </div>
    );
}

export default MobileMenuLink;
