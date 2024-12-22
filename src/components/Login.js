import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Giriş işlemleri için API'ye istek gönderilebilir.
    console.log('Giriş Verisi:', { email, password });
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <h1>Giriş Yap</h1>
        <form onSubmit={handleLogin}>
          <div className='input-group'>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className={email ? 'filled' : ''}>E-posta</label>
          </div>
          <div className='input-group'>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={password ? 'filled' : ''}>Şifre</label>
          </div>
          <button type="submit">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
