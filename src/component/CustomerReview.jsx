import React, { useState, useEffect } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const reviews = [
    {
      id: 1,
      text: "This product completely transformed my workflow. The quality is exceptional and it's incredibly user-friendly.",
      name: "Sarah Johnson",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      text: "I've tried many similar products but none compare to this one. The attention to detail is remarkable.",
      name: "Michael Chen",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      text: "As a team lead, I appreciate how this solution has improved our productivity across the entire department.",
      name: "David Wilson",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 4,
      text: "The customer support is outstanding and the product itself has exceeded all my expectations.",
      name: "Emily Rodriguez",
      role: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 5,
      text: "Simple yet powerful. It has everything we need without unnecessary complexity.",
      name: "James Thompson",
      role: "Backend Engineer",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
    },
    {
      id: 6,
      text: "The learning curve was minimal and the results were visible almost immediately after implementation.",
      name: "Olivia Martinez",
      role: "Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 7,
      text: "Our conversion rates improved significantly after integrating this solution into our platform.",
      name: "Robert Kim",
      role: "Data Analyst",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 8,
      text: "The pricing is very reasonable considering the value we're getting from this product.",
      name: "Sophia Williams",
      role: "Content Strategist",
      image: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      id: 9,
      text: "Reliable performance with consistent updates that keep adding useful features.",
      name: "Daniel Brown",
      role: "DevOps Engineer",
      image: "https://randomuser.me/api/portraits/men/94.jpg",
    },
    {
      id: 10,
      text: "Our team collaboration has improved dramatically since we started using this service.",
      name: "Emma Garcia",
      role: "Project Coordinator",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
      setCurrentIndex(0); // Reset to first slide on resize
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= reviews.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - slidesToShow : prevIndex - 1
    );
  };

  // Calculate the width of each slide based on number of slides to show
  const slideWidth = `${100 / slidesToShow}%`;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Heading section */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Customer Reviews
        </h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          What our customers say about us
        </p>
      </div>

      {/* Reviews carousel */}
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation arrows - only show if more than one slide */}
        {reviews.length > slidesToShow && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous review"
            >
              <FaChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next review"
            >
              <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Reviews container */}
        <div className="overflow-hidden px-8 sm:px-10">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 px-2 sm:px-4"
                style={{ width: slideWidth }}
              >
                {/* Review card */}
                <div className="bg-green-900 p-4 sm:p-6 rounded-lg shadow-md h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="flex justify-end mb-2 sm:mb-4">
                    <FaQuoteRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
                  </div>

                  {/* Review text */}
                  <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">
                    {review.text}
                  </p>

                  {/* Reviewer info */}
                  <div className="flex items-center mt-auto">
                    {/* Reviewer image */}
                    <div className="mr-3 sm:mr-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-8 w-8 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-gray-200"
                      />
                    </div>

                    {/* Reviewer details */}
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">
                        {review.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
