import { FaChevronRight } from "react-icons/fa";
import logo_footer from "../assets/logo_footer.png";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-10">
        <div className="container mx-auto">
          {/* Top Section: About Us, Learn More, Shop, Recipes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* About Us Section (Larger Area) */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold mb-2">About Us</h2>
              <p className="text-sm mb-4">
                Welcome to our website, a wonderful place to explore and learn how
                to cook like a pro.
              </p>
              <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 bg-transparent text-white outline-none"
                />
                <button className="bg-pink-500 px-4 py-2 text-white">Send</button>
              </div>
  
              {/* Bottom Section */}
              <div className="border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <img src={logo_footer} alt="Chaffiy" className="w-max h-max" />
                  <span className="text-sm text-gray-400">
                    © 2023 Chaffiy Company
                  </span>

                  <div className="text-sm text-gray-400 space-x-4">
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </div>
                </div>

              </div>
            </div>

            <div className="md:col-span-1"></div>
  
            {/* Shop & Recipes Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Shop</h2>
              <ul className="space-y-2">
                {["Gift Subscription", "Send Us Feedback"].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <FaChevronRight className="text-gray-400 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
  
              {/* Learn More Section */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Learn More</h2>
                <ul className="space-y-2">
                  {["Our Cooks", "See Our Features", "FAQ"].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <FaChevronRight className="text-gray-400 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold mb-2">Recipes</h2>
              <ul className="space-y-2">
                {[
                  "What to Cook This Week",
                  "Pasta",
                  "Dinner",
                  "Healthy",
                  "Vegetarian",
                  "Vegan",
                  "Christmas",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <FaChevronRight className="text-gray-400 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
