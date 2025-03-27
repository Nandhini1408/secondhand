import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sell from "./pages/Sell";
import Footer from "./components/Footer"; // Import Footer
import Navbar from "./components/Navbar"; // Import Navbar (If applicable)

const PrivateRoute = ({ element }) => {
  return localStorage.getItem("token") ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include Navbar at the top */}
        <div className="content">
          <Routes>
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/products" element={<PrivateRoute element={<Products />} />} />
            <Route path="/sell" element={<PrivateRoute element={<Sell />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer /> {/* Include Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
