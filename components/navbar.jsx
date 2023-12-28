import React, { useEffect, useState } from 'react'
import { LinkList } from './linklist'
import Link from 'next/link'
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { useRouter } from 'next/router';
import FloatingCart from './cart';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isLinkActive = (path) => {
    if (path === '/') {
      return router.pathname === path;
    } else if (path === '/' || router.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={` z-10 w-full ${
      isScrolled ? 'fixed' : 'fixed'
    }`}>
      <div className={` z-10 h-[40pxx] ${
        isScrolled ? 'hidden' : ''     } `}>
        <div className=' bg-secondary px-10 md:px-auto  py-2'>
          <div className=' container mx-auto'>
            <h1 className='text-white text-[12px] flex items-center'>
              <i className='text-white mr-1'>
                <FaPhoneAlt />
              </i>
              1234567{' '}
              <span className='ml-2 flex items-center'>
                <i className='mr-1'>
                  <FaTelegramPlane />
                </i>{' '}
                example@mgail.com
              </span>{' '}
            </h1>

          </div>
        </div>
      </div>

      <div
        className={` right-0 left-0 top-0 bg-white z-10 shadow-lg duration-400 ease-in-out`}
      >
        <div className='container h-[75px] items-center bg-white flex justify-between mx-auto w-full'>
          <div className='logo'>
            <h1 className='text-[20px] text-green-900 ml-10 md:ml-0 font-bold flex items-center justify-between'> <h1 className='mr-14'>MedicareRx</h1> <FloatingCart/>
             </h1>
            
          </div>

          {/* Mobile menu icon */}
          <div
            className='lg:hidden text-black mx-10 md:hidden cursor-pointer'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              // Close icon (you can replace it with your icon)
              <span>&times;</span>
            ) : (
              // Hamburger icon (☰)
              <span>&#x2630;</span>
            )}
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className='lg:hidden md:hidden mt-[90px] fixed top-0 left-0 w-full h-full bg-white'>
              <ul className='flex flex-col items-center w-full gap-2 px-10 mt-10'>
                {LinkList.map(({ name, path }) => (
                  <li key={name}>
                    <Link href={`/${path}`} className=' w-ful'>
                      <p
                        className={`capitalize font-[500] text-[20px] hover:text-secondary cursor-pointer ${
                          isLinkActive(path) ? 'text-secondary' : 'text-secondary'
                        } `}
                        onClick={toggleMobileMenu}
                      >
                        {name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desktop navigation */}
          <ul className='hidden md:flex justify-between gap-4 lg:gap-10 list-none p-0 m-0 '>
            {LinkList.map(({ name, path }) => (
              <li key={name}>
                <Link href={`/${path}`}>
                  <p
                    className={`capitalize font-[500] text-[15px] hover:text-secondary cursor-pointer ${
                      isLinkActive(path) ? 'text-secondary' : 'text-black'
                    } `}
                  >
                    {name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;