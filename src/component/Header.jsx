import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <section>
        <div className="flex bg-gray-700 text-white items-center p-4 justify-between ">
          <h1 className="text-xl font-bold sm:text-2xl">Socioly.</h1>
          <ul className="hidden sm:flex gap-4">
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/service">Services</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/analytic">Analytic</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/aricle">Article</Link>
            </li>
          </ul>
          <button className="bg-white sm:block hidden text-lg font-semibold text-black p-2 rounded-lg sm:ml-4">
            Get Started
          </button>
        </div>

        {/* Add mobile menu here */}
        <div className="flex  sm:hidden  bg-gray-700 justify-center p-4">
        <ul className="flex gap-4">
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/">Pricing</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/">Services</Link>
            </li>
            <li className="md:p-2 hover:scale-95 text-lg font-bold cursor-pointer text-white">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;
