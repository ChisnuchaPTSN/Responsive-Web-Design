import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Atom } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-white drop-shadow-md fixed top-0 w-full z-50'>
            <div className="flex justify-between items-center py-6 px-8 md:px-40">
                <Link to="/" className='flex items-center space-x-2'>
                    <Atom size={30} />
                    <h2 className='text-gray-900 text-2xl md:text-2xl font-semibold'>
                        PORTFOLIO</h2>
                </Link>

                <div className="md:hidden">
                    <button id='menu-toggle' className='text-gray-900 cursor-pointer' onClick={toggleMenu}>
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'transform rotate-90' : ''}`}
                        >
                            {isMenuOpen ? (
                                <path d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </button>
                </div>

                <ul className='text-gray-900 font-medium hidden md:flex space-x-5'>
                    <li>
                        <Link to="/" className='p-3 hover:text-gray-400 transition-all duration-300 rounded-md'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='p-3 hover:text-gray-400 transition-all duration-300 rounded-md'>About</Link>
                    </li>
                    <li>
                        <Link to="/services" className='p-3 hover:text-gray-400 transition-all duration-300 rounded-md'>Services</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='p-3 hover:text-gray-400 transition-all duration-300 rounded-md'>Contact</Link>
                    </li>
                </ul>
            </div>

            {isMenuOpen && (
                <ul className='text-gray-900 font-medium flex flex-col md:hidden items-end'>
                    <li className='px-7 py-5'>
                        <Link to="/" className=' hover:text-cyan-500'>Home</Link>
                    </li>
                    <li className='px-7 py-5'>
                        <Link to="/about" className=' hover:text-cyan-500'>About</Link>
                    </li>
                    <li className='px-7 py-5'>
                        <Link to="/services" className=' hover:text-cyan-500'>Services</Link>
                    </li>
                    <li className='px-7 py-5'>
                        <Link to="/contact" className='hover:text-cyan-500'>Contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
