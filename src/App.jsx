// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import "./App.css";
// import Navbar from "./component/Navbar";
// import Home from "./component/Home";
// import ServiceCards from "./component/Service";
// import AboutPage from "./component/AboutUs";
// import PlantSelection from "./component/PlantChoice";
// import CustomerReviews from "./component/CustomerReview";
// import Footer from "./component/Footer";
// import AuthComponent from "./component/linkedpages/SignupPage";
// import LoginComponent from "./component/linkedpages/LoginPage";
// import QuantityPage from "./component/linkedpages/QuantityPage";
// import CartPage from "./cart/CartPage"; // Make sure this path is correct
// import OrderSuccess from "./component/linkedpages/OrderSucess";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Home />
//                 <ServiceCards />
//                 <AboutPage />
//                 <PlantSelection />
//                 <CustomerReviews />
//               </>
//             }
//           />
//           {/* <Route path="/home" element={<Home />} /> */}
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/popular" element={<PlantSelection />} />
//           <Route path="/preview" element={<CustomerReviews />} />
//           <Route path="/register" element={<AuthComponent />} />
//           <Route
//             path="/login"
//             element={<LoginComponent onLogin={handleLogin} />}
//           />
//           <Route path="/quantity" element={<QuantityPage />} />
//           <Route path="/cart" element={<CartPage />} /> {/* Added this line */}
//           <Route path="/ordersucess" element={<OrderSuccess />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// ----------------------------------------------

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ServiceCards from "./component/Service";
import AboutPage from "./component/AboutUs";
import PlantSelection from "./component/PlantChoice";
import AllPlants from "./component/Allplants";
import CustomerReviews from "./component/CustomerReview";
import Footer from "./component/Footer";
import AuthComponent from "./component/linkedpages/SignupPage";
import LoginComponent from "./component/linkedpages/LoginPage";
import QuantityPage from "./component/linkedpages/QuantityPage";
import CartPage from "./cart/CartPage";
import OrderSuccess from "./component/linkedpages/OrderSucess";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ServiceCards />
                <AboutPage />
                <PlantSelection />
                <AllPlants />
                <CustomerReviews />
              </>
            }
          />
          <Route path="/service" element={<ServiceCards />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/popular" element={<PlantSelection />} />
          <Route path="/allplants" element={<AllPlants />} />
          <Route path="/preview" element={<CustomerReviews />} />
          <Route path="/register" element={<AuthComponent />} />
          <Route
            path="/login"
            element={<LoginComponent onLogin={handleLogin} />}
          />
          <Route path="/quantity" element={<QuantityPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/ordersucess" element={<OrderSuccess />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
