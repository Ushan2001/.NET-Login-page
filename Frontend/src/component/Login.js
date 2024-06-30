import React, { useState } from 'react';
import axios from 'axios';
import "./style.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting login:', { email, password });
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Response from Express server:', response.data);
      alert('Successfully Login');
      window.location.assign("https://cdn.pixabay.com/photo/2016/06/04/10/21/love-you-1435257_640.png")
     
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid credentials');
    }
  };

  return (
    <div className='container'>
      
      <form onSubmit={handleSubmit} id="form">
      <h2 className='text-center'>Login</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email:</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password:</label>
          <input
            type="password"
             class="form-control" 
             id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
