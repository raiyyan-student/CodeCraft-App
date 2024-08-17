import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password recovery logic here
  };

  return (
    <div className="auth-container">
      <h2>Recover Password</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Recover Password</button>
      </form>
    </div>
  );
};

export default PasswordRecovery;