import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Sell = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = '67e1727f1d1649931f57fc24'; // Replace with actual user ID from authentication

    try {
      const response = await fetch('http://localhost:5000/api/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...product, userId }), // Ensure userId is included
      });

      console.log('Response status:', response.status);
      const textResponse = await response.text();
      console.log('Raw response:', textResponse);

      const data = JSON.parse(textResponse);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add product');
      }

      alert('Product listed successfully!');
      setProduct({ name: '', description: '', price: '', image: '' });
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
  };

  return (
    <div className="sell">
      <Navbar />
      <main className="sell-container">
        <h2>Sell Your Product</h2>
        <form onSubmit={handleSubmit} className="sell-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            required
          />
          <button type="submit">List Product</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Sell;
