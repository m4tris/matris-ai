import React, { useState } from 'react';
import '../App.css'; // CSS dosyasını doğru bir şekilde import edin

const Signup = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kayıt Verisi:', { username });
  };

  return (
    
    <div className='signup-container'>
      <h1>Bir hesap oluştur</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder=" "  // Placeholder'ı boş bırakıyoruz
          />
          <label htmlFor="username">E-posta</label>
        </div>
        <br />
        <button type="submit">Devam Et</button>
      </form>
    </div>
  );
};

export default Signup;
