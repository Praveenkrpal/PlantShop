import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    // <div className="bg-gray-900 text-gray-300">
    <div className="bg-green-900 text-white">
      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Newsletter section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Subscribe to our newsletter
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 sm:py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            />
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider with social icons */}
        <div className="border-t border-gray-700 pt-6 pb-6 sm:pt-8 sm:pb-8">
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>

        {/* Footer links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo section */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white">
                <span className="text-green-500">Plant</span>Shop
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Your one-stop shop for all gardening needs. Quality plants and
              accessories for every gardener.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Plants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Flowers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Gardening
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Seeds
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">
              Popular Services
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Tree Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Grass Cutting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Weed Control
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center">
                <span className="text-gray-400 text-sm sm:text-base">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 text-sm sm:text-base">
                  info@plantshop.com
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 text-sm sm:text-base">
                  123 Garden St, Greenville, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm">
            &copy; Copyright {new Date().getFullYear()} PlantShop. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
