import React from "react";
import { FaTruck, FaHeadset, FaLeaf, FaMoneyBillWave } from "react-icons/fa";

const ServiceCards = () => {
  // Service data array with react-icons
  const services = [
    {
      name: "Fast Delivery",
      description: "Get your plants delivered quickly to your doorstep.",
      icon: <FaTruck className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-100",
    },
    {
      name: "Great Customer Service",
      description: "24/7 support for all your gardening questions.",
      icon: <FaHeadset className="w-8 h-8 text-green-500" />,
      color: "bg-green-100",
    },
    {
      name: "Original Plants",
      description: "100% authentic, high-quality plants guaranteed.",
      icon: <FaLeaf className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-100",
    },
    {
      name: "Affordable Price",
      description: "Quality plants at prices that won't break the bank.",
      icon: <FaMoneyBillWave className="w-8 h-8 text-orange-500" />,
      color: "bg-orange-100",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best services to make your gardening experience
            wonderful
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative pt-16 border-2 border-solid to-black"
            >
              {/* Icon container that lifts on hover */}
              <div
                className={`absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center h-16 w-16 rounded-full ${service.color} mb-6 transition-all duration-300 group-hover:-translate-y-4 group-hover:shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Service name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
