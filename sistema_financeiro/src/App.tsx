import { Routes, Route } from 'react-router'

import { Login } from './pages/Login'
import { Registe } from './pages/Registe'
import { Home } from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Registe />} />
      </Routes>
    </div>
  )
}

export default App
