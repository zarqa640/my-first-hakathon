import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Menu Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Menu</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                New arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Best sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Recently viewed
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Popular this week
              </a>
            </li>
            <li>
              <a href="/All-products" className="hover:underline">
                All products
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Cookery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Furniture
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hardware
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Plants
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Clothing
              </a>
            </li>
          </ul>
        </div>

        {/* Our Company Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Vacancies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return policy
              </a>
            </li>
          </ul>
        </div>

        {/* Join our newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Join our newsletter</h4>
          <form
            action="#"
            className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-[300px] bg-blue-900 px-4 py-2 text-gray-900 text-[15px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="bg-white hover:bg-slate-100 text-[15px] text-[#2A254B] px-6 py-2"
            >
              Signup
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        <p className="text-gray-400">Copyright © 2022 Acme Ltd</p>
        {/* Social Links */}
        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

