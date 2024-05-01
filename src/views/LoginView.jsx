import Login from '../components/Login.jsx'
import { IonPage } from '@ionic/react';
function LoginView(){
    return(
        <div>
            <IonPage>
                <Login></Login>
            </IonPage>
        </div>
    )
}

export default LoginView;