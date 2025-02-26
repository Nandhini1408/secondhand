import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';


const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const products = [
    {
      id: 1,
      name: 'Vintage Camera',
      description: 'A classic vintage camera in great condition.',
      price: 120,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Leather Jacket',
      description: 'Genuine leather jacket, perfect for winter.',
      price: 80,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Wooden Chair',
      description: 'Handcrafted wooden chair, sturdy and stylish.',
      price: 60,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Smart Watch',
      description: 'Latest smartwatch with health tracking features.',
      price: 150,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Vintage Record Player',
      description: 'A retro record player for music lovers.',
      price: 200,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      name: 'Designer Handbag',
      description: 'Elegant designer handbag for any occasion.',
      price: 250,
      image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: 180,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      name: 'Antique Clock',
      description: 'A beautiful antique clock for your home.',
      price: 90,
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      name: 'Gaming Console',
      description: 'Next-gen gaming console for immersive gameplay.',
      price: 400,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      name: 'Smartphone',
      description: 'Latest smartphone with high-end features.',
      price: 600,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 11,
      name: 'Laptop',
      description: 'High-performance laptop for work and play.',
      price: 900,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with great sound quality.',
      price: 70,
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 13,
      name: 'Electric Kettle',
      description: 'Fast-boiling electric kettle for your kitchen.',
      price: 40,
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 14,
      name: 'Coffee Maker',
      description: 'Automatic coffee maker for the perfect brew.',
      price: 120,
      image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 15,
      name: 'Desk Lamp',
      description: 'Modern desk lamp with adjustable brightness.',
      price: 50,
      image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 16,
      name: 'Backpack',
      description: 'Stylish and durable backpack for everyday use.',
      price: 60,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 17,
      name: 'Running Shoes',
      description: 'Comfortable running shoes for athletes.',
      price: 100,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 18,
      name: 'Sunglasses',
      description: 'Trendy sunglasses with UV protection.',
      price: 45,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 19,
      name: 'Yoga Mat',
      description: 'Eco-friendly yoga mat for your workouts.',
      price: 30,
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 20,
      name: 'Electric Toothbrush',
      description: 'Advanced electric toothbrush for oral care.',
      price: 80,
      image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="products">
      <Navbar />
      <main>
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;