import { useState } from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { IoMenu } from "react-icons/io5"; 
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='shadow-md w-full'>
      <div className="md:px-10 py-4 px-7">
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <BeakerIcon className="h-7 w-7 text-blue-600" />
            <span className='font-bold'>ProHealthSeminar</span> 
          </div>
          <div className='md:hidden'>
            {isMenuOpen ? (
              <IoMdClose  className="h-7 w-7 text-blue-600 cursor-pointer" onClick={toggleMenu} />
            ) : (
              <IoMenu className="h-7 w-7 text-blue-600 cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
          <ul className={`md:flex gap-4 items-center ${isMenuOpen ? 'flex flex-col mt-4' : 'hidden'}`}>
            <li>
              <a href='/' className='text-blue-600 hover:underline'>Home</a>
            </li>
            <li>
              <a href='/' className='text-blue-600 hover:underline'>Services</a>
            </li>
            <li>
              <a href='/' className='text-blue-600 hover:underline'>About</a>
            </li>
            <li>
              <a href='/' className='text-blue-600 hover:underline'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
