// import React from "react";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const LoginComponent = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//         {/* Left side - Plant Image */}
//         <div className="md:w-1/2 bg-green-50 flex items-center justify-center p-8">
//           <img
//             src="/Image/cart-4.png"
//             alt="Indoor plants"
//             className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
//           />
//         </div>

//         {/* Right side - Login Form */}
//         <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Login to PlantShop
//             </h2>
//             <p className="text-gray-600">Welcome back to your plant paradise</p>
//           </div>

//           <form className="space-y-6">
//             {/* Email Field */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 placeholder="Email Address"
//                 required
//               />
//             </div>

//             {/* Password Field */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-600"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a
//                   href="#"
//                   className="font-medium text-green-600 hover:text-green-500"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
//               >
//                 Login
//               </button>
//             </div>

//             <div className="text-center text-sm text-gray-600">
//               Don't have an account?{" "}
//               <a
//                 href="#"
//                 className="font-medium text-green-600 hover:text-green-500"
//               >
//                 Register here
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginComponent;

// -------------------------------------------------

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

// const LoginComponent = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle your login logic here
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//         {/* Left side - Plant Image */}
//         <div className="md:w-1/2 bg-green-50 flex items-center justify-center p-8">
//           <img
//             src="/Image/cart-4.png"
//             alt="Indoor plants"
//             className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
//           />
//         </div>

//         {/* Right side - Login Form */}
//         <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Login to PlantShop
//             </h2>
//             <p className="text-gray-600">Welcome back to your plant paradise</p>
//           </div>

//           <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//             {/* Email Field */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 className={`block w-full pl-10 pr-3 py-3 border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                 placeholder="Email Address"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Invalid email address",
//                   },
//                 })}
//               />
//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password Field */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className={`block w-full pl-10 pr-10 py-3 border ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                 placeholder="Password"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters",
//                   },
//                 })}
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                 <button
//                   type="button"
//                   className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {showPassword ? (
//                     <FaEyeSlash className="h-5 w-5" />
//                   ) : (
//                     <FaEye className="h-5 w-5" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//                   {...register("rememberMe")}
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-600"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a
//                   href="#"
//                   className="font-medium text-green-600 hover:text-green-500"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
//               >
//                 Login
//               </button>
//             </div>

//             <div className="text-center text-sm text-gray-600">
//               Don't have an account?{" "}
//               <a
//                 href="#"
//                 className="font-medium text-green-600 hover:text-green-500"
//               >
//                 Register here
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginComponent;

// ---------------------------------------------

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Handle your login logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Plant Image */}
        <div className="md:w-1/2 bg-green-50 flex items-center justify-center p-8">
          <img
            src="/Image/cart-4.png"
            alt="Indoor plants"
            className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right side - Login Form */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Login to PlantShop
            </h2>
            <p className="text-gray-600">Welcome back to your plant paradise</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                className={`block w-full pl-10 pr-3 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className={`block w-full pl-10 pr-10 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  {...register("rememberMe")}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password" // Update this to your forgot password route
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
              >
                Login
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register" // This will navigate to your register page
                className="font-medium text-green-600 hover:text-green-500"
              >
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
