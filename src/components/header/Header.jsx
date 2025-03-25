import { useState } from 'react';
import { Link } from 'react-router-dom';
import {menus} from '../../data/data';
import logo from '../../assets/images/logo.png';
import { MdOutlineScreenSearchDesktop } from "react-icons/md"; // значок поиска
import { BiMenuAltRight } from "react-icons/bi"; // значок меню
// components 
import MobileMenu from './MobileMenu';
import DesktopMenuLink from './DesktopMenuLink';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='container mx-auto px-2 flex justify-between items-center text-white border-b border-zinc-900'>
           <Link to='/'>
            <img src={logo} className='size-28 effect hover:translate-y-2' alt="logo"/>
           </Link>
           
        {/* десктопное меню  */}
            <div className='hidden lg:flex gap-8'>
                {menus.map((menu) => {
                    return <DesktopMenuLink key={menu.title} {...menu}/>
                })}            
            </div>
              
            <div className='text-3xl flex gap-4'>
                <Link to='/search' className='xl:text-4xl effect hover:translate-y-2'> 
                <MdOutlineScreenSearchDesktop />
                </Link>
                <BiMenuAltRight onClick={handleMenu} className='lg:hidden'/>
           </div>

           {/* меню для телефона */}
          <MobileMenu closeMenu={handleMenu} isMenuOpen={isMenuOpen}/>
        </div>
    );
}

export default Header;
