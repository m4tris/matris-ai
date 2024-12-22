import React from 'react';
import { Link } from 'react-router-dom';  // Link kullanarak sayfalar arası geçiş yapabilirsiniz.

const Home = () => {
  return (
    <div className='home-container'> 
      <h1>WELCOME TO MATRİS</h1>
      <p></p>
      <div>
        <Link to="/signup">
          <button>Kayıt Ol</button>
        </Link>
        <Link to="/login">
          <button>Giriş Yap</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
