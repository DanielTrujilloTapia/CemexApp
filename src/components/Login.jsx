import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigate('/home');
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  const handleRegister = () => {
    navigate('/registerUser');
  };    

  return (
    <div>
      <input 
        type="text" 
        placeholder="Usuario" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Login;
