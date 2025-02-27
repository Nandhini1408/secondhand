import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewListings = () => {
    navigate('/products'); // Redirect to the Products page
  };

  const handleViewMessages = () => {
    alert('You have 3 new messages!'); // Placeholder functionality
  };

  const handleViewEarnings = () => {
    alert('You’ve earned $120 this month!'); // Placeholder functionality
  };

  const handleAddProduct = () => {
    navigate('/sell'); // Redirect to the Sell page
  };

  return (
    <div className="dashboard">
      <Navbar />
      <main>
        <h2>Your Dashboard</h2>
        <p>Welcome back! Here's what's happening today.</p>
        <div className="dashboard-content">
          <div className="card">
            <h3>Your Listings</h3>
            <p>You have 5 active listings.</p>
            <button onClick={handleViewListings}>View Listings</button>
          </div>
          <div className="card">
            <h3>Messages</h3>
            <p>You have 3 new messages.</p>
            <button onClick={handleViewMessages}>View Messages</button>
          </div>
          <div className="card">
            <h3>Earnings</h3>
            <p>You've earned $120 this month.</p>
            <button onClick={handleViewEarnings}>View Earnings</button>
          </div>
          <div className="card">
            <h3>Add Product</h3>
            <p>List a new product for sale.</p>
            <button onClick={handleAddProduct}>Add Product</button>
          </div>
        </div>
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Sold a vintage camera for $120.</li>
            <li>Received a new message about your leather jacket.</li>
            <li>Listed a new item: Wooden Chair.</li>
            <li>Earned $50 from a recent sale.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;