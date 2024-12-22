import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('E-posta:', email);
    console.log('Şifre:', password);
  };

  return (
    <div className="login-container">
      <h1>Giriş Yap</h1>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=""
          />
          <label htmlFor="email" className={email ? 'filled' : ''}>E-posta</label>
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=""
          />
          <label htmlFor="password" className={password ? 'filled' : ''}>Şifre</label>
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
