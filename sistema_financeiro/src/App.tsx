import { Routes, Route } from 'react-router'

import { Login } from './pages/Login'
import { Registe } from './pages/Registe'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Registe />} />
      </Routes>
    </div>
  )
}

export default App
