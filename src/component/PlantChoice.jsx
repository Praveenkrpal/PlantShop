// import React from "react";
// import { FaStar, FaShoppingCart } from "react-icons/fa";
// import { useCart } from "../context/CartContext";

// const PlantChoice = () => {
//   const { addToCart } = useCart();

//   const plants = [
//     {
//       id: 1,
//       name: "Snake Plant",
//       specificName: "Sansevieria Trifasciata",
//       rating: 4.5,
//       price: 24.99,
//       image: "/Image/cart-1.png",
//     },
//     {
//       id: 2,
//       name: "Monstera",
//       specificName: "Monstera Deliciosa",
//       rating: 4.8,
//       price: 32.5,
//       image: "/Image/cart-2.png",
//     },
//     {
//       id: 3,
//       name: "Fiddle Leaf Fig",
//       specificName: "Ficus Lyrata",
//       rating: 4.3,
//       price: 28.75,
//       image: "/Image/cart-3.png",
//     },
//     {
//       id: 4,
//       name: "Peace Lily",
//       specificName: "Spathiphyllum Wallisii",
//       rating: 4.6,
//       price: 19.99,
//       image: "/Image/cart-4.png",
//     },
//   ];

//   const handleAddToCart = (plant) => {
//     addToCart(plant);
//     alert(`Added ${plant.name} to cart!`);
//     // You can add your cart logic here
//   };

//   return (
//     <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       {/* Heading section */}
//       <div className="max-w-3xl mx-auto text-center mb-6">
//         <h3 className="text-2xl font-bold text-gray-900">Your Choice Plant</h3>
//         <p className="mt-1 text-sm text-gray-600">
//           Select from our premium collection
//         </p>
//       </div>

//       {/* Plant cards grid */}
//       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {plants.map((plant) => (
//           <div
//             key={plant.id}
//             className="group bg-green-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative h-full pb-4"
//           >
//             {/* Plant image with hover effect */}
//             <div className="relative -top-4 h-32 w-full transition-all duration-300 group-hover:-top-10 z-10">
//               <div className="h-full w-full flex items-center justify-center p-2">
//                 <img
//                   src={plant.image}
//                   alt={plant.name}
//                   className="h-40 w-96 object-contain transition-transform duration-300 group-hover:scale-105"
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
//     </div>
//   );
// };

// export default PlantChoice;

// --------------------------------------------

// components/PlantChoice.jsx
import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";

const PlantChoice = () => {
  const dispatch = useDispatch();

  const plants = [
    // ... your existing plants array
    {
      id: 1,
      name: "Snake Plant",
      specificName: "Sansevieria Trifasciata",
      rating: 4.5,
      price: 24.99,
      image: "/Image/cart-1.png",
    },
    {
      id: 2,
      name: "Monstera",
      specificName: "Monstera Deliciosa",
      rating: 4.8,
      price: 32.5,
      image: "/Image/cart-2.png",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      specificName: "Ficus Lyrata",
      rating: 4.3,
      price: 28.75,
      image: "/Image/cart-3.png",
    },
    {
      id: 4,
      name: "Peace Lily",
      specificName: "Spathiphyllum Wallisii",
      rating: 4.6,
      price: 19.99,
      image: "/Image/cart-4.png",
    },
  ];

  const handleAddToCart = (plant) => {
    const cartItem = {
      id: plant.id,
      name: plant.name,
      specificName: plant.specificName,
      price: plant.price,
      imageUrl: plant.image, // Map image to imageUrl
    };
    dispatch(addItemToCart(cartItem));
    alert(`Added ${plant.name} to cart!`);
  };

  // ... rest of your component remains the same
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Heading section */}
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Your Popular Plant</h3>
        <p className="mt-1 text-sm text-gray-600">
          Select from our premium collection
        </p>
      </div>

      {/* Plant cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="group bg-green-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative h-full pb-4"
          >
            {/* Plant image with hover effect */}
            <div className="relative -top-4 h-32 w-full transition-all duration-300 group-hover:-top-10 z-10">
              <div className="h-full w-full flex items-center justify-center p-2">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-40 w-96 object-contain transition-transform duration-300 group-hover:scale-105"
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
    </div>
  );
};

export default PlantChoice;
