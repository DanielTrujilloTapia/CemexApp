import { useState } from 'react';
import { IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton } from '@ionic/react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [usernameRegister, setUsernameRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
    console.log('Usuario registrado:');
    console.log('Nombre de usuario:', usernameRegister);
    console.log('Contraseña:', passwordRegister);
  };

  const handleLogin = () =>{
    navigate('/');
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Registro de usuario</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonInput
          type="text"
          placeholder="Nombre de usuario"
          value={usernameRegister}
          onIonChange={(e) => setUsernameRegister(e.detail.value)}
        ></IonInput>
        <IonInput
          type="password"
          placeholder="Contraseña"
          value={passwordRegister}
          onIonChange={(e) => setPasswordRegister(e.detail.value)}
        ></IonInput>
      
        <IonButton expand="full" onClick={handleRegister}>Registrar</IonButton>
        <IonButton expand="full" onClick={handleLogin}>login</IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default Register;
