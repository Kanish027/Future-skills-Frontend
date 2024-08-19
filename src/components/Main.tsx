import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { GetCardData } from "../actions/Card";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { allCards } = useSelector((state: RootState) => state.cards);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    dispatch(GetCardData());
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCards = allCards.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="">
      {/* Hero Section */}
      <div className="h-64 md:h-80 bg-purple-100 flex justify-center items-center px-4">
        <div className="space-y-5 max-w-xl w-full text-center">
          <div className="text-3xl md:text-5xl font-semibold">
            How can we help?
          </div>
          <div>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                className="block w-full p-3 md:p-4 text-sm border-slate-500 border rounded"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                required
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2 font-medium text-sm px-3 py-2 md:px-4 md:py-2"
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center my-10 md:my-20 px-4">
        <div className="max-w-4xl w-full">
          <div className="grid gap-6 md:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {filteredCards &&
              filteredCards.map((item) => (
                <Link
                  to={`/${item._id}`}
                  key={item._id}
                  className="border bg-slate-100 border-black rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="py-2 border-b border-black px-3 text-lg md:text-xl font-semibold">
                    {item.title}
                  </div>
                  <div className="px-3 py-2 text-sm md:text-base">
                    {item.description}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
