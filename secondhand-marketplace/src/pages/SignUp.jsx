import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const SignUp = () => {
  return (
    <div className="signup">
      <Navbar />
      <main>
        <h2>Create Your Account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;