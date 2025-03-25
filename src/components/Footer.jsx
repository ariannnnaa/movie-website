import logo from '../assets/images/logo.png';
import { socials } from '../data/data';

const Footer = () => {
    return (
        <div className='mt-11 border-t border-zinc-900 text-center'>
        <div className='flex flex-col items-center gap-10 md:flex-row md:justify-evenly'>
          
            <div className='flex flex-col items-center gap-4'>
              <img src={logo} className='size-28' alt='logo'/>
              <p>movies@gmail.com</p>
        
              <div className='flex gap-4 text-2xl'>
               {socials.map((item, index) => { 
                return <div key={index}>
                    {item}
                </div>
               })}
              </div>
            </div>
            
              <div>
            <h3>Поддержка</h3>
        
            <div className='mt-4 md:mt-6 flex flex-col gap-2'>
            <p>Размещение рекламы</p>
            <p>Центр поддержки</p>
            <p>О нашем сервисе</p>
            </div>
           </div>
        
        </div>

        <p className='mt-11 py-4 border-t border-zinc-900 md:w-2/5 mx-auto'> 
            Copyright © 2025 movies. All rights reserved
            </p>
        </div>
    );
}

export default Footer;
