import React, { useState } from "react";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

const QuantityPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handlePlaceOrder = () => {
    alert(`Order placed for ${quantity} plants!`);
    // Add your order placement logic here
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : Math.max(1, value));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Plant Image */}
        <div className="md:w-1/2 bg-green-50 flex items-center justify-center p-8">
          <img
            src="/Image/cart-4.png"
            alt="Beautiful plant"
            className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right side - Quantity Selection */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Many Plants Do You Want?
            </h2>
            <p className="text-gray-600">Select the quantity for your order</p>
          </div>

          <div className="space-y-8">
            {/* Quantity Input */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter No. of Quantity
              </label>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={handleDecrement}
                  className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </button>

                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-90 text-center py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg font-medium"
                />

                <button
                  onClick={handleIncrement}
                  className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
            >
              <FaShoppingCart className="mr-2" />
              Place Order ({quantity})
            </button>

            {/* Additional Info */}
            <div className="text-center text-sm text-gray-600">
              <p>Free delivery for orders above 5 plants!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityPage;
