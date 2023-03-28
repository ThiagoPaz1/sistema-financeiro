import { Routes, Route } from 'react-router'
import { Login } from './pages/Login'
import { Registe } from './pages/Registe'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
