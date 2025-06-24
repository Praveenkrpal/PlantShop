// import React from "react";
// import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";

// const AuthComponent = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//           {/* Left side - Plant Image */}
//           <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
//             <img
//               src="/Image/cart-4.png"
//               alt="Plant decoration"
//               className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
//             />
//           </div>

//           {/* Right side - Registration Form */}
//           <div className="md:w-1/2 p-8 md:p-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Register to PlantShop
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Create your account to explore our plant collection
//             </p>

//             <form className="space-y-6">
//               {/* Name Field */}
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUser className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                   placeholder="Full Name"
//                   required
//                 />
//               </div>

//               {/* Phone Field */}
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaPhone className="text-gray-400" />
//                 </div>
//                 <input
//                   type="tel"
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                   placeholder="Phone Number"
//                   required
//                 />
//               </div>

//               {/* Email Field */}
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                   placeholder="Email Address"
//                   required
//                 />
//               </div>

//               {/* Password Field */}
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="text-gray-400" />
//                 </div>
//                 <input
//                   type="password"
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                   placeholder="Password"
//                   required
//                 />
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
//                 >
//                   Register
//                 </button>
//               </div>

//               <div className="text-center text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <a
//                   href="#"
//                   className="font-medium text-green-600 hover:text-green-500"
//                 >
//                   Sign in
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;

// ------------------------------------------------------------------------
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   FaUser,
//   FaPhone,
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// const AuthComponent = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//           {/* Left side - Plant Image */}
//           <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
//             <img
//               src="/Image/cart-4.png"
//               alt="Plant decoration"
//               className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
//             />
//           </div>

//           {/* Right side - Registration Form */}
//           <div className="md:w-1/2 p-8 md:p-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Register to PlantShop
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Create your account to explore our plant collection
//             </p>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.name ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Full Name"
//                     {...register("name", {
//                       required: "Name is required",
//                       minLength: {
//                         value: 3,
//                         message: "Name must be at least 3 characters",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaPhone className="text-gray-400" />
//                   </div>
//                   <input
//                     type="tel"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.phone ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Phone Number"
//                     {...register("phone", {
//                       required: "Phone number is required",
//                       pattern: {
//                         value: /^[0-9]{10,15}$/,
//                         message: "Please enter a valid phone number",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.phone.message}
//                   </p>
//                 )}
//               </div>

//               {/* Email Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Email Address"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: "Please enter a valid email address",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="text-gray-400" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className={`block w-full pl-10 pr-10 py-3 border ${
//                       errors.password ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Password"
//                     {...register("password", {
//                       required: "Password is required",
//                       minLength: {
//                         value: 6,
//                         message: "Password must be at least 6 characters",
//                       },
//                     })}
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? (
//                       <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
//                     ) : (
//                       <FaEye className="text-gray-400 hover:text-gray-600" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
//                 >
//                   Register
//                 </button>
//               </div>

//               <div className="text-center text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <a
//                   href="#"
//                   className="font-medium text-green-600 hover:text-green-500"
//                 >
//                   Sign in
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;

// -------------------------------------------

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import {
//   FaUser,
//   FaPhone,
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// const AuthComponent = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle your registration logic here
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//           {/* Left side - Plant Image */}
//           <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
//             <img
//               src="/Image/cart-4.png"
//               alt="Plant decoration"
//               className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
//             />
//           </div>

//           {/* Right side - Registration Form */}
//           <div className="md:w-1/2 p-8 md:p-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Register to PlantShop
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Create your account to explore our plant collection
//             </p>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.name ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Full Name"
//                     {...register("name", {
//                       required: "Name is required",
//                       minLength: {
//                         value: 3,
//                         message: "Name must be at least 3 characters",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaPhone className="text-gray-400" />
//                   </div>
//                   <input
//                     type="tel"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.phone ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Phone Number"
//                     {...register("phone", {
//                       required: "Phone number is required",
//                       pattern: {
//                         value: /^[0-9]{10,15}$/,
//                         message: "Please enter a valid phone number",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.phone.message}
//                   </p>
//                 )}
//               </div>

//               {/* Email Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Email Address"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: "Please enter a valid email address",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="text-gray-400" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className={`block w-full pl-10 pr-10 py-3 border ${
//                       errors.password ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Password"
//                     {...register("password", {
//                       required: "Password is required",
//                       minLength: {
//                         value: 6,
//                         message: "Password must be at least 6 characters",
//                       },
//                     })}
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? (
//                       <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
//                     ) : (
//                       <FaEye className="text-gray-400 hover:text-gray-600" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
//                 >
//                   Register
//                 </button>
//               </div>

//               <div className="text-center text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login" // This will navigate to your login page
//                   className="font-medium text-green-600 hover:text-green-500"
//                 >
//                   Sign in
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;

// -------------above code is without emalijs-----------------

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";
// import {
//   FaUser,
//   FaPhone,
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// const AuthComponent = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // First, send the registration data to your backend/console
//       console.log("Registration data:", data);

//       // Then send the email notification using EmailJS
//       const emailParams = {
//         user_name: data.name,
//         user_email: data.email,
//         user_phone: data.phone,
//         registration_date: new Date().toLocaleString(),
//       };

//       await emailjs.send(
//         "service_glcigj9",
//         "template_qib417n",
//         emailParams,
//         "CKI_YCWFPZzEa1OiW"
//       );

//       console.log("Email notification sent successfully!");
//       setSubmitStatus({
//         success: true,
//         message: "Registration successful! Check your email.",
//       });
//       reset(); // Reset form after successful submission
//     } catch (error) {
//       console.error("Error:", error);
//       setSubmitStatus({
//         success: false,
//         message: "Registration failed. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//           {/* Left side - Plant Image */}
//           <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
//             <img
//               src="/Image/cart-4.png"
//               alt="Plant decoration"
//               className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
//             />
//           </div>

//           {/* Right side - Registration Form */}
//           <div className="md:w-1/2 p-8 md:p-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Register to PlantShop
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Create your account to explore our plant collection
//             </p>

//             {/* Submission status message */}
//             {submitStatus && (
//               <div
//                 className={`mb-6 p-4 rounded-lg ${
//                   submitStatus.success
//                     ? "bg-green-100 text-green-800"
//                     : "bg-red-100 text-red-800"
//                 }`}
//               >
//                 {submitStatus.message}
//               </div>
//             )}

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     name="user_name"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.name ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Full Name"
//                     {...register("name", {
//                       required: "Name is required",
//                       minLength: {
//                         value: 3,
//                         message: "Name must be at least 3 characters",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaPhone className="text-gray-400" />
//                   </div>
//                   <input
//                     type="tel"
//                     name="user_phone"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.phone ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Phone Number"
//                     {...register("phone", {
//                       required: "Phone number is required",
//                       pattern: {
//                         value: /^[0-9]{10,15}$/,
//                         message: "Please enter a valid phone number",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.phone.message}
//                   </p>
//                 )}
//               </div>

//               {/* Email Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     name="user_email"
//                     className={`block w-full pl-10 pr-3 py-3 border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Email Address"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: "Please enter a valid email address",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="text-gray-400" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="user_password"
//                     className={`block w-full pl-10 pr-10 py-3 border ${
//                       errors.password ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
//                     placeholder="Password"
//                     {...register("password", {
//                       required: "Password is required",
//                       minLength: {
//                         value: 6,
//                         message: "Password must be at least 6 characters",
//                       },
//                     })}
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? (
//                       <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
//                     ) : (
//                       <FaEye className="text-gray-400 hover:text-gray-600" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${
//                     isSubmitting
//                       ? "bg-green-400"
//                       : "bg-green-600 hover:bg-green-700"
//                   } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300`}
//                 >
//                   {isSubmitting ? "Registering..." : "Register"}
//                 </button>
//               </div>

//               <div className="text-center text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="font-medium text-green-600 hover:text-green-500"
//                 >
//                   Sign in
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;

// ------------------------------------------------

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const AuthComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Registration data:", data);

      // Prepare email parameters
      const emailParams = {
        to_name: "PlantShop Admin", // Your name or company name
        from_name: data.name, // User's name
        from_email: data.email, // User's email
        from_phone: data.phone, // User's phone
        message: `New registration received from ${data.name} (${data.email}).`, // Custom message
        registration_date: new Date().toLocaleString(),
      };

      // Send email
      const response = await emailjs.send(
        "service_qx11g7q", // Your EmailJS Service ID
        "template_qib417n", // Your EmailJS Template ID
        emailParams,
        "CKI_YCWFPZzEa1OiW" // Your EmailJS Public Key
      );

      console.log("EmailJS Response:", response);
      setSubmitStatus({
        success: true,
        message:
          "Registration successful! You'll receive a confirmation email shortly.",
      });
      reset();
    } catch (error) {
      console.error("Detailed EmailJS Error:", {
        status: error.status,
        text: error.text,
        response: error.response,
      });
      setSubmitStatus({
        success: false,
        message: `Registration failed: ${
          error.text || "Please try again later."
        }`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left side - Plant Image */}
          <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
            <img
              src="/Image/cart-4.png"
              alt="Plant decoration"
              className="w-full h-auto max-h-96 object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right side - Registration Form */}
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Register to PlantShop
            </h2>
            <p className="text-gray-600 mb-8">
              Create your account to explore our plant collection
            </p>

            {/* Submission status message */}
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
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
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
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
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FaEye className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${
                    isSubmitting
                      ? "bg-green-400"
                      : "bg-green-600 hover:bg-green-700"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300`}
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </div>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
