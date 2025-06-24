import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-green-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* About Us section - top and middle */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 text-lg text-white">
          Follow instruction for more information about our organic gardening
          philosophy.
        </p>
      </div>

      {/* Image and content section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/Image/plant-1.png"
              alt="Organic garden"
              className="w-full max-w-md transition-transform duration-350 ease-in-out hover:scale-[1.2]"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Make your <span className="text-yellow-600">organic</span> garden
            </h3>
            <p className="text-white text-lg leading-relaxed">
              We are dedicated to helping you create sustainable, chemical-free
              gardens that thrive naturally. Our methods focus on working with
              nature rather than against it, producing healthier plants and
              tastier harvests while protecting the environment for future
              generations.
            </p>

            {/* Additional paragraph */}
            <p className="text-white text-lg leading-relaxed mt-4">
              With over 15 years of experience in organic gardening, our team
              shares practical tips and techniques to make your gardening
              journey successful and enjoyable.
            </p>
          </div>
        </div>
      </div>
      {/* -------- */}
      {/* First Section - Content Left, Image Right */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our <span className="text-yellow-600">Mission</span>
            </h3>
            <p className="text-white text-lg leading-relaxed">
              We are dedicated to helping you create sustainable, chemical-free
              gardens that thrive naturally. Our methods focus on working with
              nature rather than against it, producing healthier plants and
              tastier harvests while protecting the environment.
            </p>
            <p className="text-white text-lg leading-relaxed mt-4">
              Founded in 2010, we've grown from a small community project to a
              nationwide movement.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/Image/plant-2.png"
              alt="Organic garden mission"
              className="w-full max-w-md transition-transform duration-350 ease-in-out hover:scale-[1.2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
