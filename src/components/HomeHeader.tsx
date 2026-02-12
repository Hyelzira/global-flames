import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  FiLogOut,
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
  const [isAdmin, setIsAdmin] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Re-check Admin status every time the URL/location changes
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setIsAdmin(role === "admin");
  }, [location]);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setIsAdmin(false);
    setIsOpen(false); // Close mobile menu if open
    navigate("/login");
  };

  return (
    <header className="w-full sticky top-0 z-40 font-sans">
      {/* TOP BAR */}
      <div className="hidden md:flex bg-fuchsia-700 text-white text-sm py-2 px-6 justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2">
            <FiMail />
            <a href="mailto:globalflameyouthcommunity@gmail.com">
              globalflameyouthcommunity@gmail.com
            </a>
          </span>
          <span className="flex items-center space-x-2">
            <FiPhone />
            <a href="tel:+2348136848041">(+234) 813 684 8041</a>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          {/* --- ADMIN SECTION --- */}
          {isAdmin && (
            <div className="flex items-center space-x-4 border-r border-fuchsia-500 pr-4">
              <Link
                to="/admin"
                className="flex items-center space-x-1 text-xs hover:text-fuchsia-200 transition"
              >
                <FiLock />
                <span>Admin</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-xs hover:text-red-300 transition text-white"
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
            </div>
          )}

          <div className="flex space-x-4 text-lg">
            <FiFacebook className="cursor-pointer hover:text-blue-400" />
            <FiInstagram className="cursor-pointer hover:text-pink-400" />
            <FiLinkedin className="cursor-pointer hover:text-blue-300" />
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <h1 className="text-lg font-bold">
            <span className="text-black">GLOBAL FLAME</span>{" "}
            <span className="text-fuchsia-700">YOUTH COMMUNITY</span>
          </h1>
        </div>

        <nav className="hidden xl:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-fuchsia-700">Home</Link>
          <div className="relative group">
            <Link to="/about" className="flex items-center hover:text-fuchsia-700">
              About Us
              <FiChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition" />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white border rounded-lg shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              {ABOUT_DROPDOWN_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-4 py-2 text-sm hover:bg-purple-50 hover:text-purple-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/services" className="hover:text-fuchsia-700">Services</Link>
          <Link to="/activities" className="hover:text-fuchsia-700">Activities</Link>
          <Link to="/team" className="hover:text-fuchsia-700">Team</Link>
          <Link to="/reviews" className="hover:text-fuchsia-700">Reviews</Link>
          <Link to="/blog" className="hover:text-fuchsia-700">Blog</Link>
          <Link to="/contact" className="hover:text-fuchsia-700">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login" className="flex items-center space-x-2 hover:text-fuchsia-700">
            <FiUser />
            <span>Login</span>
          </Link>
          <Link
            to="/about"
            className="bg-fuchsia-700 text-white px-5 py-2 rounded-md hover:bg-fuchsia-800 transition"
          >
            Learn More
          </Link>
        </div>

        <button className="md:hidden text-2xl text-fuchsia-700" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <div className="bg-white w-[75%] max-w-sm h-full shadow-lg flex flex-col relative">
            <button
              className="absolute top-4 right-4 text-2xl text-fuchsia-700"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>

            <nav className="flex flex-col space-y-4 p-6 mt-12 flex-1 overflow-y-auto">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <button className="flex justify-between items-center" onClick={toggleDropdown}>
                About Us
                <FiChevronDown className={`transition ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="pl-4">
                  {ABOUT_DROPDOWN_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block py-2 text-sm text-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/activities" onClick={() => setIsOpen(false)}>Activities</Link>
              <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

              <hr />

              {/* --- MOBILE ADMIN LINKS --- */}
              {isAdmin ? (
                <>
                  <Link
                    to="/admin"
                    className="flex items-center space-x-2 text-fuchsia-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiLock />
                    <span>Admin Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-red-600 font-medium"
                  >
                    <FiLogOut />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FiUser />
                  <span>Member Login</span>
                </Link>
              )}
            </nav>

            <div className="bg-fuchsia-800 text-white text-sm py-4 px-6">
              <p className="font-semibold mb-2">Connect with us</p>
              <div className="flex space-x-4 text-xl">
                <FiFacebook />
                <FiInstagram />
                <FiLinkedin />
              </div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default HomeHeader;