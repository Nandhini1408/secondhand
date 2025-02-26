import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Home = () => {
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate('/products');
  };

  const handleSellNow = () => {
    navigate('/sell'); // Redirect to the "Sell Product" page
  };

  return (
    <div className="home">
      <Navbar />
      <main>
        <h1>Welcome to SecondHand Market</h1>
        <p>Buy and sell pre-loved items at great prices!</p>
        <div className="cta-buttons">
          <button onClick={handleExploreProducts}>Explore Products</button>
          <button onClick={handleSellNow}>Sell Now</button>
        </div>
        <div className="features">
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Our platform is designed to make buying and selling simple and fast.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>Enjoy secure transactions with our trusted payment system.</p>
          </div>
          <div className="feature-card">
            <h3>Eco-Friendly</h3>
            <p>Help reduce waste by giving items a second life.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;