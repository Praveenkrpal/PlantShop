// import React, { useState } from "react";
// import {
//   FaStar,
//   FaShoppingCart,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// const AllPlants = () => {
//   // Plants data array - make sure you have at least 8 items to see pagination work
//   const allPlants = [
//     {
//       "id": 1,
//       "name": "Snake Plant",
//       "specificName": "Sansevieria Trifasciata",
//       "rating": 4.5,
//       "price": 24.99,
//       "image": "/Images/img01.jpg"
//     },
//     {
//       "id": 2,
//       "name": "Monstera",
//       "specificName": "Monstera Deliciosa",
//       "rating": 4.8,
//       "price": 32.50,
//       "image": "/Images/img02.jpg"
//     },
//     {
//       "id": 3,
//       "name": "Fiddle Leaf Fig",
//       "specificName": "Ficus Lyrata",
//       "rating": 4.3,
//       "price": 28.75,
//       "image": "/Images/img03.jpg"
//     },
//     {
//       "id": 4,
//       "name": "Peace Lily",
//       "specificName": "Spathiphyllum Wallisii",
//       "rating": 4.6,
//       "price": 19.99,
//       "image": "/Images/img04.jpg"
//     },
//     {
//       "id": 5,
//       "name": "Chinese Money Plant",
//       "specificName": "Pilea Peperomioides",
//       "rating": 4.7,
//       "price": 22.99,
//       "image": "/Images/img05.jpg"
//     },
//     {
//       "id": 6,
//       "name": "String of Pearls",
//       "specificName": "Senecio Rowleyanus",
//       "rating": 4.6,
//       "price": 18.50,
//       "image": "/Images/img06.jpg"
//     },
//     {
//       "id": 7,
//       "name": "Air Plant",
//       "specificName": "Tillandsia",
//       "rating": 4.3,
//       "price": 12.99,
//       "image":"/Images/img07.jpg"
//     },
//     {
//       "id": 8,
//       "name": "Lucky Bamboo",
//       "specificName": "Dracaena Sanderiana",
//       "rating": 4.2,
//       "price": 15.75,
//       "image": "/Images/img08.jpg"
//     },
//     {
//       "id": 9,
//       "name": "Peperomia",
//       "specificName": "Peperomia Obtusifolia",
//       "rating": 4.4,
//       "price": 16.99,
//       "image":"/Images/img09.jpg"
//     },
//     {
//       "id": 10,
//       "name": "ZZ Plant",
//       "specificName": "Zamioculcas Zamiifolia",
//       "rating": 4.8,
//       "price": 26.50,
//       "image": "/Images/img10.jpg"
//     },
//     {
//       "id": 11,
//       "name": "Spider Plant",
//       "specificName": "Chlorophytum Comosum",
//       "rating": 4.1,
//       "price": 14.99,
//       "image": "/Images/img11.jpg"
//     },
//     {
//       "id": 12,
//       "name": "Nerve Plant",
//       "specificName": "Fittonia Albivenis",
//       "rating": 4.3,
//       "price": 17.50,
//       "image":"/Images/img12.jpg"
//     },
//     {
//       "id": 13,
//       "name": "Golden Pothos",
//       "specificName": "Epipremnum Aureum",
//       "rating": 4.6,
//       "price": 18.75,
//       "image": "/Images/img13.jpg"
//     },
//     {
//       "id": 14,
//       "name": "Polka Dot Plant",
//       "specificName": "Hypoestes Phyllostachya",
//       "rating": 4.0,
//       "price": 13.99,
//       "image": "/Images/img14.jpg"
//     },
//     {
//       "id": 15,
//       "name": "Aloe Vera",
//       "specificName": "Aloe Barbadensis",
//       "rating": 4.5,
//       "price": 16.25,
//       "image": "/Images/img15.jpg"
//     },
//     {
//       "id": 16,
//       "name": "Jade Plant",
//       "specificName": "Crassula Ovata",
//       "rating": 4.4,
//       "price": 19.99,
//       "image":"/Images/img16.jpg"
//     },
//     {
//       "id": 17,
//       "name": "String of Hearts",
//       "specificName": "Ceropegia Woodii",
//       "rating": 4.7,
//       "price": 21.50,
//       "image":"/Images/img17.jpg"
//     },
//     {
//       "id": 18,
//       "name": "Parlor Palm",
//       "specificName": "Chamaedorea Elegans",
//       "rating": 4.2,
//       "price": 22.75,
//       "image": "/Images/img18.jpg"
//     },
//     {
//       "id": 19,
//       "name": "Rubber Plant",
//       "specificName": "Ficus Elastica",
//       "rating": 4.3,
//       "price": 23.99,
//       "image":"/Images/img19.jpg"
//     },
//     {
//       "id": 20,
//       "name": "Bird's Nest Fern",
//       "specificName": "Asplenium Nidus",
//       "rating": 4.1,
//       "price": 20.50,
//       "image": "/Images/img20.jpg"
//     },
//     {
//       "id": 21,
//       "name": "Ponytail Palm",
//       "specificName": "Beaucarnea Recurvata",
//       "rating": 4.4,
//       "price": 27.99,
//       "image":"/Images/img21.jpg"
//     },
//     {
//       "id": 22,
//       "name": "Cast Iron Plant",
//       "specificName": "Aspidistra Elatior",
//       "rating": 4.0,
//       "price": 18.75,
//       "image":"/Images/img22.jpg"
//     },
//     {
//       "id": 23,
//       "name": "Calathea",
//       "specificName": "Calathea Orbifolia",
//       "rating": 4.5,
//       "price": 24.50,
//       "image": "/Images/img23.jpg"
//     },
//     {
//       "id": 24,
//       "name": "Hoya",
//       "specificName": "Hoya Carnosa",
//       "rating": 4.6,
//       "price": 21.99,
//       "image":"/Images/img24.jpg"
//     },
//     {
//       "id": 25,
//       "name": "Maidenhair Fern",
//       "specificName": "Adiantum Raddianum",
//       "rating": 4.2,
//       "price": 19.25,
//       "image": "/Images/img25.jpg"
//     },
//     {
//       "id": 26,
//       "name": "Panda Plant",
//       "specificName": "Kalanchoe Tomentosa",
//       "rating": 4.3,
//       "price": 17.99,
//       "image": "/Images/img26.jpg"
//     },
//     {
//       "id": 27,
//       "name": "String of Bananas",
//       "specificName": "Senecio Radicans",
//       "rating": 4.5,
//       "price": 20.50,
//       "image":"/Images/img27.jpg"
//     },
//     {
//       "id": 28,
//       "name": "Pincushion Cactus",
//       "specificName": "Mammillaria Crinita",
//       "rating": 4.1,
//       "price": 15.99,
//       "image": "/Images/img28.jpg"
//     },
//     {
//       "id": 29,
//       "name": "Burro's Tail",
//       "specificName": "Sedum Morganianum",
//       "rating": 4.7,
//       "price": 23.75,
//       "image": "/Images/img29.jpg"
//     },
//     {
//       "id": 30,
//       "name": "Parlor Maple",
//       "specificName": "Abutilon Hybridum",
//       "rating": 4.0,
//       "price": 18.50,
//       "image": "/Images/img30.jpg"
//     },
//     {
//       "id": 31,
//       "name": "Moon Cactus",
//       "specificName": "Gymnocalycium Mihanovichii",
//       "rating": 3.9,
//       "price": 14.99,
//       "image": "/Images/img31.jpg"
//     },
//     {
//       "id": 32,
//       "name": "Piggyback Plant",
//       "specificName": "Tolmiea Menziesii",
//       "rating": 4.2,
//       "price": 16.75,
//       "image": "/Images/img32.jpg"
//     },
//     {
//       "id": 33,
//       "name": "Friendship Plant",
//       "specificName": "Pilea Involucrata",
//       "rating": 4.4,
//       "price": 19.25,
//       "image": "/Images/img33.jpg"
//     },
//     {
//       "id": 34,
//       "name": "Rattlesnake Plant",
//       "specificName": "Calathea Lancifolia",
//       "rating": 4.5,
//       "price": 22.99,
//       "image": "/Images/img34.jpg"
//     },
//     {
//       "id": 35,
//       "name": "Staghorn Fern",
//       "specificName": "Platycerium Bifurcatum",
//       "rating": 4.6,
//       "price": 25.50,
//       "image": "/Images/img35.jpg"
//     },
//     {
//       "id": 36,
//       "name": "Ponytail Fern",
//       "specificName": "Nephrolepis Exaltata",
//       "rating": 4.1,
//       "price": 17.99,
//       "image": "/Images/img36.jpg"
//     },
//     {
//       "id": 37,
//       "name": "Panda Paw",
//       "specificName": "Kalanchoe Beharensis",
//       "rating": 4.3,
//       "price": 20.25,
//       "image": "/Images/img37.jpg"
//     },
//     {
//       "id": 38,
//       "name": "Pink Polka Dot",
//       "specificName": "Hypoestes Phyllostachya",
//       "rating": 4.0,
//       "price": 16.50,
//       "image": "/Images/img38.jpg"
//     },
//     {
//       "id": 39,
//       "name": "Purple Passion",
//       "specificName": "Gynura Aurantiaca",
//       "rating": 4.2,
//       "price": 18.75,
//       "image":"/Images/img39.jpg"
//     },
//     {
//       "id": 40,
//       "name": "Red Prayer Plant",
//       "specificName": "Maranta Leuconeura",
//       "rating": 4.4,
//       "price": 21.99,
//       "image": "/Images/img40.jpg"
//     },
//     {
//       "id": 41,
//       "name": "Silver Pothos",
//       "specificName": "Scindapsus Pictus",
//       "rating": 4.5,
//       "price": 23.50,
//       "image": "/Images/img41.jpg"
//     },
//     {
//       "id": 42,
//       "name": "Satin Pothos",
//       "specificName": "Scindapsus Treubii",
//       "rating": 4.3,
//       "price": 20.99,
//       "image": "/Images/img42.jpg"
//     },
//     {
//       "id": 43,
//       "name": "Swiss Cheese Vine",
//       "specificName": "Monstera Adansonii",
//       "rating": 4.7,
//       "price": 26.75,
//       "image":"/Images/img43.jpg"
//     },
//     {
//       "id": 44,
//       "name": "Watermelon Peperomia",
//       "specificName": "Peperomia Argyreia",
//       "rating": 4.4,
//       "price": 19.99,
//       "image": "/Images/img44.jpg"
//     },
//     {
//       "id": 45,
//       "name": "Zebra Plant",
//       "specificName": "Aphelandra Squarrosa",
//       "rating": 4.1,
//       "price": 22.50,
//       "image":"/Images/img45.jpg"
//     },
//     {
//       "id": 46,
//       "name": "Miniature Rose",
//       "specificName": "Rosa Chinensis Minima",
//       "rating": 4.6,
//       "price": 24.99,
//       "image": "/Images/img46.jpg"
//     },
//     {
//       "id": 47,
//       "name": "Baby Rubber Plant",
//       "specificName": "Peperomia Obtusifolia",
//       "rating": 4.2,
//       "price": 18.25,
//       "image": "/Images/img47.jpg"
//     },
//     {
//       "id": 48,
//       "name": "Button Fern",
//       "specificName": "Pellaea Rotundifolia",
//       "rating": 4.0,
//       "price": 16.99,
//       "image": "/Images/img48.jpg"
//     },
//     {
//       "id": 49,
//       "name": "Dwarf Umbrella Tree",
//       "specificName": "Schefflera Arboricola",
//       "rating": 4.3,
//       "price": 21.50,
//       "image": "/Images/img49.jpg"
//     },
//     {
//       "id": 50,
//       "name": "Mini Monstera",
//       "specificName": "Rhaphidophora Tetrasperma",
//       "rating": 4.7,
//       "price": 27.99,
//       "image": "/Images/img50.jpg"
//     },{
//       "id": 51,
//       "name": "Moon Cactus",
//       "specificName": "Gymnocalycium Mihanovichii",
//       "rating": 3.9,
//       "price": 14.99,
//       "image": "/Images/img51.jpg"
//     },
//     {
//       "id": 52,
//       "name": "Piggyback Plant",
//       "specificName": "Tolmiea Menziesii",
//       "rating": 4.2,
//       "price": 16.75,
//       "image": "/Images/img52.jpg"
//     },
//     {
//       "id": 53,
//       "name": "Friendship Plant",
//       "specificName": "Pilea Involucrata",
//       "rating": 4.4,
//       "price": 19.25,
//       "image": "/Images/img53.jpg"
//     },
//     {
//       "id": 54,
//       "name": "Rattlesnake Plant",
//       "specificName": "Calathea Lancifolia",
//       "rating": 4.5,
//       "price": 22.99,
//       "image": "/Images/img54.jpg"
//     },
//     {
//       "id": 55,
//       "name": "Staghorn Fern",
//       "specificName": "Platycerium Bifurcatum",
//       "rating": 4.6,
//       "price": 25.50,
//       "image": "/Images/img55.jpg"
//     },
//     {
//       "id": 56,
//       "name": "Staghorn Fern",
//       "specificName": "Platycerium Bifurcatum",
//       "rating": 4.6,
//       "price": 25.50,
//       "image": "/Images/img56.jpg"
//     },

//     // Add more plants to test pagination...
//   ];

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const plantsPerPage = 8;

//   // Calculate total pages
//   const totalPages = Math.ceil(allPlants.length / plantsPerPage);

//   // Get current plants
//   const indexOfLastPlant = currentPage * plantsPerPage;
//   const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
//   const currentPlants = allPlants.slice(indexOfFirstPlant, indexOfLastPlant);

//   // Change page
//   const paginate = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleAddToCart = (plant) => {
//     alert(`Added ${plant.name} to cart!`);
//   };

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       {/* Heading section */}
//       <div className="max-w-3xl mx-auto text-center mb-6">
//         <h3 className="text-2xl font-bold text-gray-900">All Plants</h3>
//         <p className="mt-1 text-sm text-gray-600">
//           Browse our complete collection ({allPlants.length} plants available)
//         </p>
//       </div>

//       {/* Plant cards grid */}
//       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {currentPlants.map((plant) => (
//           <div
//             key={plant.id}
//             className="group bg-green-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative h-full pb-4"
//           >
//             {/* Plant image with hover effect */}
//             <div className="w-full transition-all duration-300 ">
//               <div className="h-full w-full flex items-center justify-center p-2">
//                 <img
//                   src={plant.image}
//                   alt={plant.name}
//                   className="h-40 w-96 object-contain transition-transform duration-300 group-hover:scale-105 hover:shadow-lg"
//                 />
//               </div>
//             </div>

//             {/* Plant details */}
//             <div className="pt-8 px-4">
//               <h4 className="text-md font-semibold text-white text-center">
//                 {plant.name}
//               </h4>
//               <p className="text-xs font-bold text-green-200 text-center mt-1">
//                 {plant.specificName}
//               </p>

//               {/* Star rating */}
//               <div className="flex justify-center mt-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     className={`h-4 w-4 ${
//                       i < Math.floor(plant.rating)
//                         ? "text-yellow-400"
//                         : "text-gray-300"
//                     }`}
//                   />
//                 ))}
//                 <span className="ml-1 text-white text-xs">{plant.rating}</span>
//               </div>

//               {/* Price and cart button */}
//               <div className="flex justify-between items-center mt-3 px-2">
//                 <span className="text-md font-bold text-white">
//                   ${plant.price.toFixed(2)}
//                 </span>
//                 <button
//                   onClick={() => handleAddToCart(plant)}
//                   className="p-1 rounded-full bg-green-100 text-yellow-600 hover:bg-green-200 transition-colors"
//                 >
//                   <FaShoppingCart className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination controls - only show if there are multiple pages */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center mt-8 space-x-2">
//           <button
//             onClick={prevPage}
//             disabled={currentPage === 1}
//             className={`p-2 rounded-full ${
//               currentPage === 1
//                 ? "text-gray-400 cursor-not-allowed"
//                 : "text-green-700 hover:bg-green-100"
//             }`}
//           >
//             <FaChevronLeft className="h-4 w-4" />
//           </button>

//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={`w-8 h-8 rounded-full text-sm font-medium ${
//                 currentPage === index + 1
//                   ? "bg-green-700 text-white"
//                   : "text-green-700 hover:bg-green-100"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button
//             onClick={nextPage}
//             disabled={currentPage === totalPages}
//             className={`p-2 rounded-full ${
//               currentPage === totalPages
//                 ? "text-gray-400 cursor-not-allowed"
//                 : "text-green-700 hover:bg-green-100"
//             }`}
//           >
//             <FaChevronRight className="h-4 w-4" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllPlants;

// ----------------above code is use when redux not use----------

import React, { useState } from "react";
import {
  FaStar,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";

const AllPlants = () => {
  const dispatch = useDispatch();

  // Plants data array
  const allPlants = [
    {
      id: 1,
      name: "Snake Plant",
      specificName: "Sansevieria Trifasciata",
      rating: 4.5,
      price: 24.99,
      image: "/Images/img01.jpg",
    },
    {
      id: 2,
      name: "Monstera",
      specificName: "Monstera Deliciosa",
      rating: 4.8,
      price: 32.5,
      image: "/Images/img02.jpg",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      specificName: "Ficus Lyrata",
      rating: 4.3,
      price: 28.75,
      image: "/Images/img03.jpg",
    },
    {
      id: 4,
      name: "Peace Lily",
      specificName: "Spathiphyllum Wallisii",
      rating: 4.6,
      price: 19.99,
      image: "/Images/img04.jpg",
    },
    {
      id: 5,
      name: "Chinese Money Plant",
      specificName: "Pilea Peperomioides",
      rating: 4.7,
      price: 22.99,
      image: "/Images/img05.jpg",
    },
    {
      id: 6,
      name: "String of Pearls",
      specificName: "Senecio Rowleyanus",
      rating: 4.6,
      price: 18.5,
      image: "/Images/img06.jpg",
    },
    {
      id: 7,
      name: "Air Plant",
      specificName: "Tillandsia",
      rating: 4.3,
      price: 12.99,
      image: "/Images/img07.jpg",
    },
    {
      id: 8,
      name: "Lucky Bamboo",
      specificName: "Dracaena Sanderiana",
      rating: 4.2,
      price: 15.75,
      image: "/Images/img08.jpg",
    },
    {
      id: 9,
      name: "Peperomia",
      specificName: "Peperomia Obtusifolia",
      rating: 4.4,
      price: 16.99,
      image: "/Images/img09.jpg",
    },
    {
      id: 10,
      name: "ZZ Plant",
      specificName: "Zamioculcas Zamiifolia",
      rating: 4.8,
      price: 26.5,
      image: "/Images/img10.jpg",
    },
    {
      id: 11,
      name: "Spider Plant",
      specificName: "Chlorophytum Comosum",
      rating: 4.1,
      price: 14.99,
      image: "/Images/img11.jpg",
    },
    {
      id: 12,
      name: "Nerve Plant",
      specificName: "Fittonia Albivenis",
      rating: 4.3,
      price: 17.5,
      image: "/Images/img12.jpg",
    },
    {
      id: 13,
      name: "Golden Pothos",
      specificName: "Epipremnum Aureum",
      rating: 4.6,
      price: 18.75,
      image: "/Images/img13.jpg",
    },
    {
      id: 14,
      name: "Polka Dot Plant",
      specificName: "Hypoestes Phyllostachya",
      rating: 4.0,
      price: 13.99,
      image: "/Images/img14.jpg",
    },
    {
      id: 15,
      name: "Aloe Vera",
      specificName: "Aloe Barbadensis",
      rating: 4.5,
      price: 16.25,
      image: "/Images/img15.jpg",
    },
    {
      id: 16,
      name: "Jade Plant",
      specificName: "Crassula Ovata",
      rating: 4.4,
      price: 19.99,
      image: "/Images/img16.jpg",
    },
    {
      id: 17,
      name: "String of Hearts",
      specificName: "Ceropegia Woodii",
      rating: 4.7,
      price: 21.5,
      image: "/Images/img17.jpg",
    },
    {
      id: 18,
      name: "Parlor Palm",
      specificName: "Chamaedorea Elegans",
      rating: 4.2,
      price: 22.75,
      image: "/Images/img18.jpg",
    },
    {
      id: 19,
      name: "Rubber Plant",
      specificName: "Ficus Elastica",
      rating: 4.3,
      price: 23.99,
      image: "/Images/img19.jpg",
    },
    {
      id: 20,
      name: "Bird's Nest Fern",
      specificName: "Asplenium Nidus",
      rating: 4.1,
      price: 20.5,
      image: "/Images/img20.jpg",
    },
    {
      id: 21,
      name: "Ponytail Palm",
      specificName: "Beaucarnea Recurvata",
      rating: 4.4,
      price: 27.99,
      image: "/Images/img21.jpg",
    },
    {
      id: 22,
      name: "Cast Iron Plant",
      specificName: "Aspidistra Elatior",
      rating: 4.0,
      price: 18.75,
      image: "/Images/img22.jpg",
    },
    {
      id: 23,
      name: "Calathea",
      specificName: "Calathea Orbifolia",
      rating: 4.5,
      price: 24.5,
      image: "/Images/img23.jpg",
    },
    {
      id: 24,
      name: "Hoya",
      specificName: "Hoya Carnosa",
      rating: 4.6,
      price: 21.99,
      image: "/Images/img24.jpg",
    },
    {
      id: 25,
      name: "Maidenhair Fern",
      specificName: "Adiantum Raddianum",
      rating: 4.2,
      price: 19.25,
      image: "/Images/img25.jpg",
    },
    {
      id: 26,
      name: "Panda Plant",
      specificName: "Kalanchoe Tomentosa",
      rating: 4.3,
      price: 17.99,
      image: "/Images/img26.jpg",
    },
    {
      id: 27,
      name: "String of Bananas",
      specificName: "Senecio Radicans",
      rating: 4.5,
      price: 20.5,
      image: "/Images/img27.jpg",
    },
    {
      id: 28,
      name: "Pincushion Cactus",
      specificName: "Mammillaria Crinita",
      rating: 4.1,
      price: 15.99,
      image: "/Images/img28.jpg",
    },
    {
      id: 29,
      name: "Burro's Tail",
      specificName: "Sedum Morganianum",
      rating: 4.7,
      price: 23.75,
      image: "/Images/img29.jpg",
    },
    {
      id: 30,
      name: "Parlor Maple",
      specificName: "Abutilon Hybridum",
      rating: 4.0,
      price: 18.5,
      image: "/Images/img30.jpg",
    },
    {
      id: 31,
      name: "Moon Cactus",
      specificName: "Gymnocalycium Mihanovichii",
      rating: 3.9,
      price: 14.99,
      image: "/Images/img31.jpg",
    },
    {
      id: 32,
      name: "Piggyback Plant",
      specificName: "Tolmiea Menziesii",
      rating: 4.2,
      price: 16.75,
      image: "/Images/img32.jpg",
    },
    {
      id: 33,
      name: "Friendship Plant",
      specificName: "Pilea Involucrata",
      rating: 4.4,
      price: 19.25,
      image: "/Images/img33.jpg",
    },
    {
      id: 34,
      name: "Rattlesnake Plant",
      specificName: "Calathea Lancifolia",
      rating: 4.5,
      price: 22.99,
      image: "/Images/img34.jpg",
    },
    {
      id: 35,
      name: "Staghorn Fern",
      specificName: "Platycerium Bifurcatum",
      rating: 4.6,
      price: 25.5,
      image: "/Images/img35.jpg",
    },
    {
      id: 36,
      name: "Ponytail Fern",
      specificName: "Nephrolepis Exaltata",
      rating: 4.1,
      price: 17.99,
      image: "/Images/img36.jpg",
    },
    {
      id: 37,
      name: "Panda Paw",
      specificName: "Kalanchoe Beharensis",
      rating: 4.3,
      price: 20.25,
      image: "/Images/img37.jpg",
    },
    {
      id: 38,
      name: "Pink Polka Dot",
      specificName: "Hypoestes Phyllostachya",
      rating: 4.0,
      price: 16.5,
      image: "/Images/img38.jpg",
    },
    {
      id: 39,
      name: "Purple Passion",
      specificName: "Gynura Aurantiaca",
      rating: 4.2,
      price: 18.75,
      image: "/Images/img39.jpg",
    },
    {
      id: 40,
      name: "Red Prayer Plant",
      specificName: "Maranta Leuconeura",
      rating: 4.4,
      price: 21.99,
      image: "/Images/img40.jpg",
    },
    {
      id: 41,
      name: "Silver Pothos",
      specificName: "Scindapsus Pictus",
      rating: 4.5,
      price: 23.5,
      image: "/Images/img41.jpg",
    },
    {
      id: 42,
      name: "Satin Pothos",
      specificName: "Scindapsus Treubii",
      rating: 4.3,
      price: 20.99,
      image: "/Images/img42.jpg",
    },
    {
      id: 43,
      name: "Swiss Cheese Vine",
      specificName: "Monstera Adansonii",
      rating: 4.7,
      price: 26.75,
      image: "/Images/img43.jpg",
    },
    {
      id: 44,
      name: "Watermelon Peperomia",
      specificName: "Peperomia Argyreia",
      rating: 4.4,
      price: 19.99,
      image: "/Images/img44.jpg",
    },
    {
      id: 45,
      name: "Zebra Plant",
      specificName: "Aphelandra Squarrosa",
      rating: 4.1,
      price: 22.5,
      image: "/Images/img45.jpg",
    },
    {
      id: 46,
      name: "Miniature Rose",
      specificName: "Rosa Chinensis Minima",
      rating: 4.6,
      price: 24.99,
      image: "/Images/img46.jpg",
    },
    {
      id: 47,
      name: "Baby Rubber Plant",
      specificName: "Peperomia Obtusifolia",
      rating: 4.2,
      price: 18.25,
      image: "/Images/img47.jpg",
    },
    {
      id: 48,
      name: "Button Fern",
      specificName: "Pellaea Rotundifolia",
      rating: 4.0,
      price: 16.99,
      image: "/Images/img48.jpg",
    },
    {
      id: 49,
      name: "Dwarf Umbrella Tree",
      specificName: "Schefflera Arboricola",
      rating: 4.3,
      price: 21.5,
      image: "/Images/img49.jpg",
    },
    {
      id: 50,
      name: "Mini Monstera",
      specificName: "Rhaphidophora Tetrasperma",
      rating: 4.7,
      price: 27.99,
      image: "/Images/img50.jpg",
    },
    {
      id: 51,
      name: "Moon Cactus",
      specificName: "Gymnocalycium Mihanovichii",
      rating: 3.9,
      price: 14.99,
      image: "/Images/img51.jpg",
    },
    {
      id: 52,
      name: "Piggyback Plant",
      specificName: "Tolmiea Menziesii",
      rating: 4.2,
      price: 16.75,
      image: "/Images/img52.jpg",
    },
    {
      id: 53,
      name: "Friendship Plant",
      specificName: "Pilea Involucrata",
      rating: 4.4,
      price: 19.25,
      image: "/Images/img53.jpg",
    },
    {
      id: 54,
      name: "Rattlesnake Plant",
      specificName: "Calathea Lancifolia",
      rating: 4.5,
      price: 22.99,
      image: "/Images/img54.jpg",
    },
    {
      id: 55,
      name: "Staghorn Fern",
      specificName: "Platycerium Bifurcatum",
      rating: 4.6,
      price: 25.5,
      image: "/Images/img55.jpg",
    },
    {
      id: 56,
      name: "Staghorn Fern",
      specificName: "Platycerium Bifurcatum",
      rating: 4.6,
      price: 25.5,
      image: "/Images/img56.jpg",
    },

    // Add all 56 plants here...
    // Make sure to include all your plant objects
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(allPlants.length / plantsPerPage);

  // Get current plants
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = allPlants.slice(indexOfFirstPlant, indexOfLastPlant);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleAddToCart = (plant) => {
    const cartItem = {
      id: plant.id,
      name: plant.name,
      specificName: plant.specificName,
      price: plant.price,
      imageUrl: plant.image,
    };
    dispatch(addItemToCart(cartItem));
    alert(`Added ${plant.name} to cart!`);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Heading section */}
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">All Plants</h3>
        <p className="mt-1 text-sm text-gray-600">
          Browse our complete collection ({allPlants.length} plants available)
        </p>
      </div>

      {/* Plant cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentPlants.map((plant) => (
          <div
            key={plant.id}
            className="group bg-green-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative h-full pb-4"
          >
            {/* Plant image with hover effect */}
            <div className=" -top-4 h-32 w-full transition-all duration-300">
              <div className=" w-full flex items-center justify-center p-2">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-36 w-80 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Plant details */}
            <div className="pt-8 px-4">
              <h4 className="text-md font-semibold text-white text-center">
                {plant.name}
              </h4>
              <p className="text-xs font-bold text-green-200 text-center mt-1">
                {plant.specificName}
              </p>

              {/* Star rating */}
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(plant.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-1 text-white text-xs">{plant.rating}</span>
              </div>

              {/* Price and cart button */}
              <div className="flex justify-between items-center mt-3 px-2">
                <span className="text-md font-bold text-white">
                  ${plant.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleAddToCart(plant)}
                  className="p-1 rounded-full bg-green-100 text-yellow-600 hover:bg-green-200 transition-colors"
                >
                  <FaShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-green-700 hover:bg-green-100"
          }`}
        >
          <FaChevronLeft className="h-4 w-4" />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`w-8 h-8 rounded-full text-sm font-medium ${
              currentPage === index + 1
                ? "bg-green-700 text-white"
                : "text-green-700 hover:bg-green-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-green-700 hover:bg-green-100"
          }`}
        >
          <FaChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AllPlants;

