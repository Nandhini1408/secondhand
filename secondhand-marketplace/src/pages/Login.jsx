import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <main>
        <h2>Login to Your Account</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </main>
      <Footer />
    </div>
  );
};

export default Login;