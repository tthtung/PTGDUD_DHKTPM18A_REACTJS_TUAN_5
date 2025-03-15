import { FaSearch } from "react-icons/fa";
import ava from "../assets/ava.jfif";
import logo_header from "../assets/logo_header.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Logo và tiêu đề */}
      <div className="flex items-center space-x-2 overflow-hidden h-[80px]">
        <img
          src={logo_header}
          alt="Chefify Logo"
          className="w-full h-full object-cover object-top"
        />
        {/* <h1 className="text-xl font-bold text-pink-500">Cheffify</h1> */}
      </div>

      {/* Thanh tìm kiếm */}
      <div className="relative">
        <input
          type="text"
          placeholder="Salad"
          className="pl-8 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
        />
        <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-pink-500">
          What to cook
        </a>
        <a href="#" className="hover:text-pink-500">
          Recipes
        </a>
        <a href="#" className="hover:text-pink-500">
          Ingredients
        </a>
        <a href="#" className="hover:text-pink-500">
          Occasions
        </a>
        <a href="#" className="hover:text-pink-500">
          About Us
        </a>
      </nav>

      {/* Recipe Box và Avatar */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 bg-pink-100 text-pink-500 rounded-full hover:bg-pink-200 transition">
          <span>✅</span>
          <span>Your Recipe Box</span>
        </button>
        <img src={ava} alt="User Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
