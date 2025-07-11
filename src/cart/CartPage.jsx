import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from "./cartSlice";

// Your plants data array
const plants = [
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
    image: "/Image/cart-.png",
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
];

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);

  // Calculate tax and total
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const formatINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const increaseQuantity = (id) => {
    const item = plants.find((plant) => plant.id === id);
    if (item) {
      dispatch(
        addItemToCart({
          id: item.id,
          name: item.name,
          price: item.price,
          imageUrl: item.image, // Using the image path from plants array
        })
      );
    }
  };

  const decreaseQuantity = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const removeItem = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  // Function to get full plant details for cart items
  const getPlantDetails = (cartItem) => {
    const plant = plants.find((p) => p.id === cartItem.id);
    return {
      ...cartItem,
      specificName: plant?.specificName || "",
      rating: plant?.rating || 0,
      // Use the image from plants array if not in cartItem
      imageUrl: cartItem.imageUrl || plant?.image || "/default-plant.png",
    };
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-6">Your cart is empty</p>
          <Link
            to="/shop"
            className="inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {cartItems.map((cartItem) => {
              const item = getPlantDetails(cartItem);
              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-6 mb-8 pb-6 border-b border-gray-200"
                >
                  <div className="sm:w-48 sm:h-48 w-full h-64 overflow-hidden rounded-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-plant.png";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">
                      {item.specificName}
                    </p>
                    <p className="text-lg font-bold text-green-700 my-2">
                      {formatINR(item.price)}
                    </p>

                    <div className="flex items-center gap-3 my-4">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 border border-gray-300 bg-white rounded-md flex items-center justify-center hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 border border-gray-300 bg-white rounded-md flex items-center justify-center hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>
                Subtotal (
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
              </span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>GST (18%)</span>
              <span>{formatINR(tax)}</span>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-3 mt-3 font-bold text-lg">
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>

            <button className="w-full bg-green-700 text-white py-3 rounded-md mt-6 hover:bg-green-800 transition-colors">
              <Link to="/ordersucess">Place Order</Link>
            </button>

            <Link
              to="/"
              className="block w-full bg-gray-100 text-gray-800 py-3 rounded-md mt-3 text-center hover:bg-gray-200 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
