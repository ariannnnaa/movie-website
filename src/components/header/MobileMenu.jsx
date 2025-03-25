import { menus } from '../../data/data';
import { FaReply } from "react-icons/fa6"; // значок выйти
import MobileMenuLink from './MobileMenuLink';

const MobileMenu = ({closeMenu, isMenuOpen}) => {
    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-all ease-in duration-500
       h-0 overflow-y-hidden ${isMenuOpen && 'min-h-screen overflow-visible'} bg-white text-neutral-900`}>
            <FaReply onClick={closeMenu} className='m-2 text-lg'/>
          
            <div className='mt-3 flex flex-col gap-2'>
              <h3 className='text-center mb-2 md:mb-6 font-extrabold'>Меню</h3>
              {menus.map((menu) => {
                  return <MobileMenuLink key={menu.title} closeMenu={closeMenu} {...menu}/>
              })}
            </div>
        </div>
    );
}

export default MobileMenu;
