import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Usuarios from "./pages/Usuarios/Usuarios.jsx";
import IncioCadastro from "./pages/InicioCadastro/IncioCadastro.jsx";
import Menu from "./components/Menu/Menu.jsx";

function App() {


  return (
      <BrowserRouter>
          <Menu />

          <Routes>
              <Route path="/" element={<IncioCadastro />} />
              <Route path="/Login" element={<Login />}/>
              <Route path="/Usuarios" element={<Usuarios />}/>
          </Routes>
      </BrowserRouter>

  )
}

export default App
