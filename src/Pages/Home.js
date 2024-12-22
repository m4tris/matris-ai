import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Welcome to Matris</h1>
      <p>Your AI-powered assistant for all your needs.</p>
      <div className='button-container'>
        <Link to="/signup">
          <button className='signup-button'>Sign Up</button>
        </Link>
        <Link to="/login">
          <button className='login-button'>Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
