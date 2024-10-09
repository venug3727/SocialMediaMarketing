import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:block p-[20px] text-white bg-gray-700">
        <div className="p-[30px] items-center">
          <h1 className="text-center text-5xl font-bold">Socioly.</h1>
          <div className="flex items-start justify-between mt-[30px]">
            <div className="flex flex-col">
              <h2 className="mt-[40px] text-3xl font-bold">Stay up to date with our story</h2>
              <p className="text-xl mt-[20px]">
                Join and be the first to get the latest news <br />
                about trends, promotions, and much more!
              </p>
              <div className="mt-[20px] flex justify-between p-[10px] border-2 bg-gray-700 border-white rounded-lg">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none bg-gray-700 text-white"
                  required
                />
                <button className="bg-white text-black p-[5px] px-[15px] rounded-lg font-semibold">
                  Join now
                </button>
              </div>
            </div>
            {/* Other columns */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold">Menu</h1>
              <ul className="flex flex-col items-center">
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Pricing</Link>
                </li>
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Services</Link>
                </li>
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Contact us</Link>
                </li>
              </ul>
            </div>
            {/* Additional columns */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold">Services</h1>
              <ul className="flex flex-col items-center">
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Paid Ads</Link>
                </li>
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Research</Link>
                </li>
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Design</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold">About us</h1>
              <ul className="flex flex-col items-center">
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Email us</Link>
                </li>
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Support</Link>
                </li>
                <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                  <Link to="/">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden p-[20px] text-white bg-gray-700">
        <h1 className="text-center text-3xl font-bold">Socioly.</h1>
        <h2 className="mt-[40px] text-xl font-bold">Stay up to date with our story</h2>
        <p className="text-sm mt-[20px]">
          Join and be the first to get the latest news about trends, promotions,
          and much more!
        </p>
        <div className="mt-[20px] flex justify-between p-[10px] border-2 bg-gray-700 border-white rounded-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none bg-gray-700 text-white"
            required
          />
          <button className="bg-white text-black p-[5px] px-[15px] rounded-lg font-semibold">
            Join now
          </button>
        </div>
        <div className="flex justify-evenly">
          <div className="c">
            <ul className="c">
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Services</Link>
              </li>
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Paid Ads</Link>
              </li>
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Research</Link>
              </li>
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Design</Link>
              </li>
            </ul>
          </div>
          <div className="c">
            <ul className="c">
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Pricing</Link>
              </li>
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Contact</Link>
              </li>
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">About us</Link>
              </li>
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Support</Link>
              </li>
              <li className="md:p-2 hover:scale-95 text-lg hover:font-bold mt-[20px] cursor-pointer text-white">
                <Link to="/">Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
