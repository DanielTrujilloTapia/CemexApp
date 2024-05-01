import {Routes, Route} from 'react-router-dom'
import LoginView from './views/LoginView.jsx'
import RegisterView from './views/RegisterView.jsx'
import HomeView from './views/HomeView.jsx'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginView/>} />
        <Route path="/registerUser" element={<RegisterView/>} />
        <Route path="/home" element={<HomeView/>} />
      </Routes>
    </div>
  )
}

export default App

