import React from "react";
import { FaRegBookmark, FaStar, FaRegStar } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";

const FilterSidebar = () => {
  return (
    <aside className="w-1/4 p-4 border-r">
      <h3 className="font-bold flex items-center">
        <IoIosOptions className="mr-2" /> FILTERS
      </h3>
      <div className="mt-4">
        <h4 className="font-semibold">Type</h4>
        <div className="flex flex-col gap-1">
          {["Pan-fried", "Grilled", "Stir-fried", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"].map((type) => (
            <label key={type} className="flex items-center">
              <input type="checkbox" className="mr-2" /> {type}
            </label>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Rating</h4>
        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex items-center">
            {[...Array(5)].map((_, i) => (
              i < stars ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} />
            ))}
          </div>
        ))}
      </div>
      <button className="bg-pink-500 text-white w-full p-2 mt-4 rounded hover:bg-pink-600 transition-colors">
        Apply
      </button>
    </aside>
  );
};

const RecipeCard = ({ name, image, time }) => {
  return (
    <div className="border rounded p-2 hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{time}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
        <FaRegBookmark className="text-pink-500 cursor-pointer hover:text-pink-600" />
      </div>
    </div>
  );
};

const RecipeList = () => {
  const recipes = [
    { name: "Cucumber Salad", image: "image1.jpg", time: "32 minutes" },
    { name: "Tomato Salad", image: "image2.jpg", time: "25 minutes" },
    { name: "Potato Salad", image: "image3.jpg", time: "40 minutes" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 w-3/4 p-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {[1, 2, 3, "...", 10, 11].map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 border rounded ${
            page === 1 ? "bg-pink-500 text-white" : "bg-white text-pink-500"
          } hover:bg-pink-500 hover:text-white transition-colors`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

const RecipePage = () => {
  return (
    <div className="flex w-full">
      <FilterSidebar />
      <div className="flex flex-col items-center w-3/4">
        <h2 className="text-xl font-bold p-4">Salad (32)</h2>
        <RecipeList />
        <Pagination />
      </div>
    </div>
  );
};

export default RecipePage;