import { useState } from "react";
import { Link } from "react-router-dom"; 
import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMenu,
  FiX,
  FiChevronDown,
  FiUser, 
  FiLock, 
} from "react-icons/fi";
import logo from "../assets/images/flames.jpg"; 

const ABOUT_DROPDOWN_LINKS = [
  { href: "/about#mission", label: "Our Mission" },
  { href: "/about#history", label: "Our History" },
  { href: "/about#leadership", label: "Our Leadership" },
];

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const algerianStyle = { 
    fontFamily: 'sans-serif' 
  };

  return (
    <header className="w-full sticky top-0 z-40" style={{ fontFamily: 'sans-serif'}}> 
      
      {/* Top Bar */}
      <div className="hidden md:flex bg-fuchsia-700 text-white text-sm py-2 px-6 justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2">
            <FiMail className="text-white" />
            <a href="mailto:globalflameyouthcommunity@gmail.com">
              globalflameyouthcommunity@gmail.com
            </a>
          </span>
          <span className="flex items-center space-x-2">
            <FiPhone className="text-white" />
            <a href="tel:+2348136848041">(+234)813 684 8041</a>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          {/* Admin Link in Top Bar for Desktop */}
          <Link to="/admin" className="flex items-center space-x-1 hover:text-fuchsia-200 transition text-xs border-r border-fuchsia-500 pr-4">
             <FiLock /> <span>Admin</span>
          </Link>
          <div className="flex space-x-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400"><FiFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400"><FiInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300"><FiLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">

        {/* Logo and Title */}
        <div className="flex items-center space-x-1">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <h1 className="text-lg font-bold" style={algerianStyle}>
            <span className="text-black">GLOBAL FLAME</span>{" "}
            <span className="text-fuchsia-700">YOUTH COMMUNITY</span>
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex space-x-6 font-medium">
          <Link to="/" className="text-gray-700 hover:text-fuchsia-700">Home</Link>
          
          <div className="relative group">
            <Link to="/about" className="text-gray-700 hover:text-fuchsia-700 flex items-center">
              About Us
              <FiChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-xl py-1 z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 scale-95 group-hover:scale-100">
              {ABOUT_DROPDOWN_LINKS.map((link) => (
                <Link key={link.label} to={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/services" className="text-gray-700 hover:text-fuchsia-700">Services</Link>
          <Link to="/activities" className="text-gray-700 hover:text-fuchsia-700">Activities</Link>
          <Link to="/team" className="text-gray-700 hover:text-fuchsia-700">Team</Link>
          <Link to="/reviews" className="text-gray-700 hover:text-fuchsia-700">Reviews</Link>
          <Link to="/blog" className="text-gray-700 hover:text-fuchsia-700">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-fuchsia-700">Contact</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login" className="flex items-center space-x-2 text-gray-700 hover:text-fuchsia-700 font-medium px-3 py-2 transition">
            <FiUser /> <span>Login</span>
          </Link>
          <Link
            to="/about"
            className="bg-fuchsia-700 text-white px-5 py-2 rounded-md hover:bg-fuchsia-800 transition shadow-sm"
          >
            Learn More
          </Link>
        </div>

        {/* Hamburger (mobile only) */}
        <button className="md:hidden text-2xl text-fuchsia-700" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-start"> 
          <div className="bg-white w-[75%] max-w-sm h-full shadow-lg flex flex-col relative">
            <button className="absolute top-4 right-4 text-2xl text-fuchsia-700" onClick={() => setIsOpen(false)}>
              <FiX />
            </button>

            <nav className="flex flex-col space-y-4 font-medium p-6 mt-12 flex-1 overflow-y-auto">
              <Link to="/" className="text-gray-700 border-b border-gray-50 pb-2" onClick={() => setIsOpen(false)}>Home</Link>
              
              <div className="flex flex-col">
                <button className="flex justify-between items-center text-gray-700 w-full" onClick={toggleDropdown}>
                  About Us
                  <FiChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                <div className={`flex flex-col pl-4 mt-2 transition-all ${isDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {ABOUT_DROPDOWN_LINKS.map((link) => (
                    <Link key={link.label} to={link.href} className="text-gray-600 py-2 text-sm" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/services" className="text-gray-700" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/activities" className="text-gray-700" onClick={() => setIsOpen(false)}>Activities</Link>
              <Link to="/blog" className="text-gray-700" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link to="/contact" className="text-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>

              <hr className="my-2 border-gray-100" />

              {/* ADMIN & LOGIN for Mobile */}
              <Link to="/admin" className="flex items-center space-x-2 text-fuchsia-700 py-2" onClick={() => setIsOpen(false)}>
                <FiLock /> <span>Admin Dashboard</span>
              </Link>
              <Link to="/login" className="flex items-center space-x-2 text-gray-700 py-2" onClick={() => setIsOpen(false)}>
                <FiUser /> <span>Member Login</span>
              </Link>

              <Link to="/about" className="bg-fuchsia-600 text-white px-4 py-3 rounded-md text-center mt-4 shadow-md" onClick={() => setIsOpen(false)}>
                Learn More
              </Link>
            </nav>

            <div className="bg-fuchsia-800 text-white text-sm py-4 px-6">
               <p className="font-semibold mb-2">Connect with us</p>
               <div className="flex space-x-4 text-xl">
                  <FiFacebook /> <FiInstagram /> <FiLinkedin />
               </div>
            </div>
          </div>

          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;