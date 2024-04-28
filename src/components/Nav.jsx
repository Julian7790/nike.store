import React, { useState } from 'react';
import { headerLogo } from '../nike_landing_assets/assets/images';
import { hamburger } from '../nike_landing_assets/assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="Logo" 
            width={130}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
               {navLinks.map(item => (
                <li key={item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray '>
                      {item.label}
                    </a>
                </li>
               ))}
            </ul>
        <ul className={`flex-1 flex justify-center items-center gap-16 ${isNavOpen ? 'flex-col items-center justify-center' : 'hidden'}`} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
          {navLinks.map(item => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:flex'>
          <img 
            src={hamburger} 
            alt="Hamburger" 
            width={25}
            height={25}
            onClick={toggleNav} 
            style={{ cursor: 'pointer' }}
            className='z-20'
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;