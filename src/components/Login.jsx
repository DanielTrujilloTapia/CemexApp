import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput } from '@ionic/react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);

    navigate('/home');
  };

  const handleRegister = () => {
    // Redireccionar a la ruta /registerUser
    navigate('/registerUser');
  };    

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Iniciar sesión</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonInput
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onIonChange={(e) => setUsername(e.detail.value)}
        ></IonInput>
        <IonInput
          type="password"
          placeholder="Contraseña"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value)}
        ></IonInput>

        <IonButton expand="full" onClick={handleLogin}>Login</IonButton>
        <IonButton expand="full" onClick={handleRegister}>Register</IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default Login;
