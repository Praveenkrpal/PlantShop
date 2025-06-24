// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ isAuthenticated, onLogout }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo with Brand Name */}
//           <div className="flex items-center space-x-2">
//             <img
//               src="./Image/plant logo.png"
//               alt="PlantShop Logo"
//               className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 hover:scale-110"
//             />
//             <span className="text-xl sm:text-2xl font-bold text-green-600">
//               Plant<span className="text-gray-800">Shop</span>
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <div className="flex space-x-6">
//               <Link
//                 to="/"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/popular"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Popular
//               </Link>
//               <Link
//                 to="/preview"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Preview
//               </Link>
//             </div>

//             <div className="flex items-center space-x-4 ml-6">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium border border-gray-300 px-4 py-2 rounded-md hover:border-green-600"
//                   >
//                     Register
//                   </Link>
//                   {/* Cart Button */}
//                   <Link
//                     to="/cart"
//                     className="relative p-2 text-gray-800 hover:text-green-600 transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                       />
//                     </svg>
//                     {/* Cart Item Count Badge */}
//                     <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       0
//                     </span>
//                   </Link>
//                 </>
//               ) : (
//                 <div className="flex items-center space-x-3">
//                   <Link
//                     to="/profile"
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                   </Link>
//                   <button
//                     onClick={onLogout}
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium hidden lg:block"
//                   >
//                     Logout
//                   </button>
//                   {/* Cart Button for authenticated users */}
//                   <Link
//                     to="/cart"
//                     className="relative p-2 text-gray-800 hover:text-green-600 transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                       />
//                     </svg>
//                     {/* Cart Item Count Badge */}
//                     <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       0
//                     </span>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-800 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white py-4 space-y-3 border-t mt-3">
//             <Link
//               to="/"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               About
//             </Link>
//             <Link
//               to="/popular"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Popular
//             </Link>
//             <Link
//               to="/preview"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Preview
//             </Link>

//             <div className="pt-2 mt-2 border-t">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-center font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block w-full mt-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:border-green-600 hover:text-green-600 transition-colors text-center font-medium"
//                   >
//                     Register
//                   </Link>
//                   {/* Mobile Cart Link */}
//                   <Link
//                     to="/cart"
//                     className="flex items-center justify-center w-full mt-2 text-gray-800 px-4 py-2 rounded-md hover:text-green-600 transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 mr-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                       />
//                     </svg>
//                     Cart (0)
//                   </Link>
//                 </>
//               ) : (
//                 <div className="flex items-center justify-between mt-4 px-4">
//                   <div className="flex items-center space-x-3">
//                     <Link
//                       to="/profile"
//                       className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     </Link>
//                     <span className="text-gray-800 font-medium">User</span>
//                   </div>
//                   <button
//                     onClick={onLogout}
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// -------------------------------------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ isAuthenticated, onLogout }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo with Brand Name */}
//           <div className="flex items-center space-x-2">
//             <img
//               src="./Image/plant logo.png"
//               alt="PlantShop Logo"
//               className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 hover:scale-110"
//             />
//             <span className="text-xl sm:text-2xl font-bold text-green-600">
//               Plant<span className="text-gray-800">Shop</span>
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <div className="flex space-x-6">
//               <Link
//                 to="/"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/popular"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Popular
//               </Link>
//               <Link
//                 to="/preview"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Preview
//               </Link>
//             </div>

//             <div className="flex items-center space-x-4 ml-6">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium border border-gray-300 px-4 py-2 rounded-md hover:border-green-600"
//                   >
//                     Register
//                   </Link>
//                   {/* Updated Cart Button */}
//                   <Link
//                     to="/cart"
//                     className="flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl">🛒</span>
//                     <span className="font-medium">Cart</span>
//                     <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       0
//                     </span>
//                   </Link>
//                 </>
//               ) : (
//                 <div className="flex items-center space-x-3">
//                   <Link
//                     to="/profile"
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                   </Link>
//                   <button
//                     onClick={onLogout}
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium hidden lg:block"
//                   >
//                     Logout
//                   </button>
//                   {/* Updated Cart Button for authenticated users */}
//                   <Link
//                     to="/cart"
//                     className="flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl">🛒</span>
//                     <span className="font-medium">Cart</span>
//                     <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       0
//                     </span>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-800 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white py-4 space-y-3 border-t mt-3">
//             <Link
//               to="/"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               About
//             </Link>
//             <Link
//               to="/popular"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Popular
//             </Link>
//             <Link
//               to="/preview"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Preview
//             </Link>

//             <div className="pt-2 mt-2 border-t">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-center font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block w-full mt-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:border-green-600 hover:text-green-600 transition-colors text-center font-medium"
//                   >
//                     Register
//                   </Link>
//                   {/* Updated Mobile Cart Link */}
//                   <Link
//                     to="/cart"
//                     className="flex items-center justify-center w-full mt-2 text-gray-800 px-4 py-2 rounded-md hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl mr-2">🛒</span>
//                     <span>Cart (0)</span>
//                   </Link>
//                 </>
//               ) : (
//                 <div className="flex items-center justify-between mt-4 px-4">
//                   <div className="flex items-center space-x-3">
//                     <Link
//                       to="/profile"
//                       className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     </Link>
//                     <span className="text-gray-800 font-medium">User</span>
//                   </div>
//                   <button
//                     onClick={onLogout}
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// -----------------above code is best if any thing wrong run this only---------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const Navbar = ({ isAuthenticated, onLogout }) => {
//   const { cartCount } = useCart();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo with Brand Name */}
//           <div className="flex items-center space-x-2">
//             <img
//               src="./Image/plant logo.png"
//               alt="PlantShop Logo"
//               className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 hover:scale-110"
//             />
//             <span className="text-xl sm:text-2xl font-bold text-green-600">
//               <Link to="/">
//                 {" "}
//                 Plant<span className="text-gray-800">Shop</span>
//               </Link>
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <div className="flex space-x-6">
//               <Link
//                 to="/"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/popular"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Popular
//               </Link>
//               <Link
//                 to="/preview"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Preview
//               </Link>
//             </div>

//             <div className="flex items-center space-x-4 ml-6">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium border border-gray-300 px-4 py-2 rounded-md hover:border-green-600"
//                   >
//                     Register
//                   </Link>
//                   {/* Cart Link - Updated */}
//                   <Link
//                     to="/cart"
//                     className="nav-link flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl">🛒</span>
//                     <span className="font-medium">Cart</span>
//                     <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       {cartCount}
//                     </span>
//                   </Link>
//                 </>
//               ) : (
//                 <div className="flex items-center space-x-3">
//                   <Link
//                     to="/profile"
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                   </Link>
//                   <button
//                     onClick={onLogout}
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium hidden lg:block"
//                   >
//                     Logout
//                   </button>
//                   {/* Cart Link - Updated for authenticated users */}
//                   <Link
//                     to="/cart"
//                     className="nav-link flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl">🛒</span>
//                     <span className="font-medium">Cart</span>
//                     <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       {cartCount}
//                     </span>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-800 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white py-4 space-y-3 border-t mt-3">
//             <Link
//               to="/"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               About
//             </Link>
//             <Link
//               to="/popular"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Popular
//             </Link>
//             <Link
//               to="/preview"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Preview
//             </Link>

//             <div className="pt-2 mt-2 border-t">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-center font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block w-full mt-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:border-green-600 hover:text-green-600 transition-colors text-center font-medium"
//                   >
//                     Register
//                   </Link>
//                   {/* Mobile Cart Link - Updated */}
//                   <Link
//                     to="/cart"
//                     className="nav-link flex items-center justify-center w-full mt-2 text-gray-800 px-4 py-2 rounded-md hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl mr-2">🛒</span>
//                     <span>Cart ({cartCount})</span>
//                   </Link>
//                 </>
//               ) : (
//                 <div className="flex items-center justify-between mt-4 px-4">
//                   <div className="flex items-center space-x-3">
//                     <Link
//                       to="/profile"
//                       className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     </Link>
//                     <span className="text-gray-800 font-medium">User</span>
//                   </div>
//                   <button
//                     onClick={onLogout}
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// -----------------------redux code--------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Navbar = ({ isAuthenticated, onLogout }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   // Get cart count from Redux store
//   const cartCount = useSelector((state) => state.cart.totalQuantity);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo with Brand Name */}
//           <div className="flex items-center space-x-2">
//             <img
//               src="./Image/plant logo.png"
//               alt="PlantShop Logo"
//               className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 hover:scale-110"
//             />
//             <span className="text-xl sm:text-2xl font-bold text-green-600">
//               <Link to="/">
//                 {" "}
//                 Plant<span className="text-gray-800">Shop</span>
//               </Link>
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <div className="flex space-x-6">
//               <Link
//                 to="/"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/popular"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Popular
//               </Link>
//               <Link
//                 to="/preview"
//                 className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//               >
//                 Preview
//               </Link>
//             </div>

//             <div className="flex items-center space-x-4 ml-6">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium border border-gray-300 px-4 py-2 rounded-md hover:border-green-600"
//                   >
//                     Register
//                   </Link>
//                   {/* Cart Link */}
//                   <Link
//                     to="/cart"
//                     className="nav-link flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl">🛒</span>
//                     <span className="font-medium">Cart</span>
//                     <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       {cartCount}
//                     </span>
//                   </Link>
//                 </>
//               ) : (
//                 <div className="flex items-center space-x-3">
//                   <Link
//                     to="/profile"
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                   </Link>
//                   <button
//                     onClick={onLogout}
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium hidden lg:block"
//                   >
//                     Logout
//                   </button>
//                   {/* Cart Link */}
//                   <Link
//                     to="/cart"
//                     className="nav-link flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl">🛒</span>
//                     <span className="font-medium">Cart</span>
//                     <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       {cartCount}
//                     </span>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-800 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white py-4 space-y-3 border-t mt-3">
//             <Link
//               to="/"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               About
//             </Link>
//             <Link
//               to="/popular"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Popular
//             </Link>
//             <Link
//               to="/preview"
//               className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
//             >
//               Preview
//             </Link>

//             <div className="pt-2 mt-2 border-t">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-center font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block w-full mt-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:border-green-600 hover:text-green-600 transition-colors text-center font-medium"
//                   >
//                     Register
//                   </Link>
//                   {/* Mobile Cart Link */}
//                   <Link
//                     to="/cart"
//                     className="nav-link flex items-center justify-center w-full mt-2 text-gray-800 px-4 py-2 rounded-md hover:text-green-600 transition-colors"
//                   >
//                     <span className="text-xl mr-2">🛒</span>
//                     <span>Cart ({cartCount})</span>
//                   </Link>
//                 </>
//               ) : (
//                 <div className="flex items-center justify-between mt-4 px-4">
//                   <div className="flex items-center space-x-3">
//                     <Link
//                       to="/profile"
//                       className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     </Link>
//                     <span className="text-gray-800 font-medium">User</span>
//                   </div>
//                   <button
//                     onClick={onLogout}
//                     className="text-gray-800 hover:text-green-600 transition-colors font-medium"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ---------------------------------------------

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Get cart count from Redux store
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with Brand Name */}
          <div className="flex items-center space-x-2">
            <img
              src="./Image/plant logo.png"
              alt="PlantShop Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 hover:scale-110"
            />
            <span className="text-xl sm:text-2xl font-bold text-green-600">
              <Link to="/">
                {" "}
                Plant<span className="text-gray-800">Shop</span>
              </Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link
                to="/"
                className="text-gray-800 hover:text-green-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-green-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/popular"
                className="text-gray-800 hover:text-green-600 transition-colors font-medium"
              >
                Popular
              </Link>
              <Link
                to="/allplants"
                className="text-gray-800 hover:text-green-600 transition-colors font-medium"
              >
                All Plants
              </Link>
              <Link
                to="/preview"
                className="text-gray-800 hover:text-green-600 transition-colors font-medium"
              >
                Preview
              </Link>
            </div>

            <div className="flex items-center space-x-4 ml-6">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-800 hover:text-green-600 transition-colors font-medium border border-gray-300 px-4 py-2 rounded-md hover:border-green-600"
                  >
                    Register
                  </Link>
                  {/* Cart Link */}
                  <Link
                    to="/cart"
                    className="nav-link flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors"
                  >
                    <span className="text-xl">🛒</span>
                    <span className="font-medium">Cart</span>
                    <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </Link>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </Link>
                  <button
                    onClick={onLogout}
                    className="text-gray-800 hover:text-green-600 transition-colors font-medium hidden lg:block"
                  >
                    Logout
                  </button>
                  {/* Cart Link */}
                  <Link
                    to="/cart"
                    className="nav-link flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors"
                  >
                    <span className="text-xl">🛒</span>
                    <span className="font-medium">Cart</span>
                    <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 space-y-3 border-t mt-3">
            <Link
              to="/"
              className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
            >
              About
            </Link>
            <Link
              to="/popular"
              className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
            >
              Popular
            </Link>
            <Link
              to="/allplants"
              className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
            >
              All Plants
            </Link>
            <Link
              to="/preview"
              className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
            >
              Preview
            </Link>

            <div className="pt-2 mt-2 border-t">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="block w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-center font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full mt-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:border-green-600 hover:text-green-600 transition-colors text-center font-medium"
                  >
                    Register
                  </Link>
                  {/* Mobile Cart Link */}
                  <Link
                    to="/cart"
                    className="nav-link flex items-center justify-center w-full mt-2 text-gray-800 px-4 py-2 rounded-md hover:text-green-600 transition-colors"
                  >
                    <span className="text-xl mr-2">🛒</span>
                    <span>Cart ({cartCount})</span>
                  </Link>
                </>
              ) : (
                <div className="flex items-center justify-between mt-4 px-4">
                  <div className="flex items-center space-x-3">
                    <Link
                      to="/profile"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </Link>
                    <span className="text-gray-800 font-medium">User</span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="text-gray-800 hover:text-green-600 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
