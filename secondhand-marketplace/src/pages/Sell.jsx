import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Sell = () => {
  return (
    <div className="sell">
      <Navbar />
      <main>
        <h2>Sell Your Product</h2>
        <form>
          <input type="text" placeholder="Product Name" required />
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="file" accept="image/*" required />
          <button type="submit">List Product</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Sell;