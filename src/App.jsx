import {Routes, Route} from 'react-router-dom'
import LoginView from './views/LoginView.jsx'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginView/>} />
      </Routes>
    </div>
  )
}

export default App

