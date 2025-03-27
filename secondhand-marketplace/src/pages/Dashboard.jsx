import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [username, setUsername] = useState("Guest");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch username from the backend
  useEffect(() => {
    const fetchUsername = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`http://localhost:5000/api/auth/user/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setUsername(data.userId); // Set the correct username
        } else {
          console.error("Failed to fetch username:", data.message);
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, [userId]);

  // Fetch cart items from the database
  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`http://localhost:5000/api/cart/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch cart");
        }
        const cartData = await response.json();
        setCart(cartData.products || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [userId]);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <div className="dashboard">
      <Navbar />
      <main>
        <h2>Your Dashboard</h2>
        <p>Welcome, <strong>{username}</strong>!</p>

        <div className="dashboard-content">
          <div className="card">
            <h3>Your Cart</h3>
            <p>You have {cart.length} items in your cart.</p>
            <button onClick={toggleCart}>View Cart</button>
          </div>

          <div className="card">
            <h3>Messages</h3>
            <p>You have 3 new messages.</p>
            <button onClick={() => alert("You have 3 new messages!")}>View Messages</button>
          </div>
          <div className="card">
            <h3>Earnings</h3>
            <p>You've earned $120 this month.</p>
            <button onClick={() => alert("You’ve earned $120 this month!")}>View Earnings</button>
          </div>
          <div className="card">
            <h3>Add Product</h3>
            <p>List a new product for sale.</p>
            <button onClick={() => navigate("/sell")}>Add Product</button>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Sold a vintage camera for $120.</li>
            <li>Received a new message about your leather jacket.</li>
            <li>Listed a new item: Wooden Chair.</li>
            <li>Earned $50 from a recent sale.</li>
          </ul>
        </div>

        {/* Cart Overlay with Blurred Background */}
        {showCart && (
          <div className="cart-overlay">
            <div className="cart-modal">
              <h3>Your Cart</h3>
              {cart.length > 0 ? (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      <img src={item.image} alt={item.name} width="50" />
                      {item.name} - ${item.price} (x{item.quantity})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Your cart is empty.</p>
              )}
              <button onClick={toggleCart}>Close</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
