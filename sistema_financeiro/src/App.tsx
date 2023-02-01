import { Route, Routes } from "react-router";
import "./global.css";
import { Login } from "./pages/Login";

import { Home } from "./pages/Home";
import { Registe } from "./pages/Registe";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Registe />} />
      </Routes>
    </div>
  );
}

export default App;
