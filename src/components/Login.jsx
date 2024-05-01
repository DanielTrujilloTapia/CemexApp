import { useNavigate } from 'react-router-dom';
function Login() {
  
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  const handleRegister = () => {
    navigate('/registerUser');
  };    

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Login;
