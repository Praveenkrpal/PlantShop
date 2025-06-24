// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faShoppingCart,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faGithub,
//   faLinkedin,
//   faInstagram,
//   faXTwitter,
// } from "@fortawesome/free-brands-svg-icons";

// const Home = () => {
//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 bg-green-900">
//       {/* Left Section */}
//       <div className="lg:w-1/2 mb-8 md:mb-10 lg:mb-0 lg:pr-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
//           Welcome to GreenLeaf Store
//         </h1>
//         <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">
//           Discover a wide range of beautiful indoor and outdoor plants to
//           enhance your living space naturally.
//         </p>

//         <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
//           <button className="flex items-center justify-center bg-green-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-md hover:bg-green-700 transition text-sm sm:text-base">
//             <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
//             Shop Now
//           </button>
//           <button className="flex items-center justify-center bg-gray-200 text-gray-800 px-4 py-2 sm:px-5 sm:py-2 rounded-md hover:bg-gray-300 transition text-sm sm:text-base">
//             <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
//              Know More
//           </button>
//         </div>

//         {/* Social Icons */}
//         <div className="flex space-x-4 text-lg sm:text-xl">
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white transition"
//             aria-label="GitHub"
//           >
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//           <a
//             href="#"
//             className="text-blue-400 hover:text-blue-100 transition"
//             aria-label="LinkedIn"
//           >
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//           <a
//             href="#"
//             className="text-pink-400 hover:text-pink-100 transition"
//             aria-label="Instagram"
//           >
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white transition"
//             aria-label="Twitter"
//           >
//             <FontAwesomeIcon icon={faXTwitter} />
//           </a>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="lg:w-1/2 flex justify-center mt-6 sm:mt-8 lg:mt-0">
//         <img
//           src="./Image/side-portree.png"
//           alt="Plant"
//           className="w-full max-w-xs sm:max-w-sm md:max-w-md transition-transform duration-300 ease-in-out hover:scale-105 lg:hover:scale-110"
//           loading="lazy"
//         />
//       </div>
//     </section>
//   );
// };

// export default Home;

// ---------------------------------------------------

import React from "react";
import { Link } from "react-router-dom"; // Add this import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 bg-green-900">
      {/* Left Section */}
      <div className="lg:w-1/2 mb-8 md:mb-10 lg:mb-0 lg:pr-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          Welcome to GreenLeaf Store
        </h1>
        <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">
          Discover a wide range of beautiful indoor and outdoor plants to
          enhance your living space naturally.
        </p>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
          <Link
            to="/allplants"
            className="flex items-center justify-center bg-green-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-md hover:bg-green-700 transition text-sm sm:text-base"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Shop Now
          </Link>

          {/* Updated "Know More" button to Link */}
          <Link
            to="/Service" // Matches the route path in App.jsx
            className="flex items-center justify-center bg-gray-200 text-gray-800 px-4 py-2 sm:px-5 sm:py-2 rounded-md hover:bg-gray-300 transition text-sm sm:text-base"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            Know More
          </Link>
        </div>

        {/* Social Icons (unchanged) */}
        <div className="flex space-x-4 text-lg sm:text-xl">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-100 transition"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#"
            className="text-pink-400 hover:text-pink-100 transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>

      {/* Right Section (unchanged) */}
      <div className="lg:w-1/2 flex justify-center mt-6 sm:mt-8 lg:mt-0">
        <img
          src="./Image/side-portree.png"
          alt="Plant"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md transition-transform duration-300 ease-in-out hover:scale-105 lg:hover:scale-110"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;
