import { Clapperboard } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow dark:bg-rose-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Logo + Mobile Button */}
          <div className="flex items-center justify-between">
            <div className="text-white text-lg font-bold md:text-3xl">
              <Link to={"/"} className="flex items-center gap-2">
                <Clapperboard />
                <p className="text-[22px]">Movie Explorer</p>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-rose-500 dark:text-rose-200 hover:text-rose-600 dark:hover:text-rose-400 focus:outline-none focus:text-rose-600 dark:focus:text-rose-400"
                aria-label="toggle menu"
              >
                {/* Hamburger Icon */}
                {!isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}

                {/* Close Icon */}
                {isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-rose-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            {/* Navigation Links */}
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                to={"/"}
                className="px-3 py-2 mx-3 mt-2 text-rose-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-rose-200 hover:bg-rose-100 dark:hover:bg-rose-700"
              >
                Home
              </Link>
              <Link
                to={"/movie-listing"}
                className="px-3 py-2 mx-3 mt-2 text-rose-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-rose-200 hover:bg-rose-100 dark:hover:bg-rose-700"
              >
                Movie Listing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
