import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Giriş işlemleri için API'ye istek gönderilebilir.
    console.log('Giriş Verisi:', { email, password });
  };

  return (
    <div>
      <h1>Giriş Yap</h1>
      <form onSubmit={handleLogin}>
        <label>
          E-posta:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Şifre:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
