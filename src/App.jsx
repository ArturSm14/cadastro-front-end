import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Usuarios from "./pages/Usuarios/Usuarios.jsx";
import IncioCadastro from "./pages/InicioCadastro/IncioCadastro.jsx";
import Menu from "./components/Menu/Menu.jsx";
import {useState} from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md"

function App() {

    const [light, setLight] = useState(false)

    function ligarLightMode() {
        setLight(!light)
    }

  return (
      <BrowserRouter>
          <div className={light === false ? "bg-gray-900 text-white" : "bg-white text-black"}>
              <Menu />
              <button onClick={ligarLightMode}> {light === true ? <MdDarkMode size={25} /> : <MdOutlineDarkMode size={25} />}</button>
          </div>
          <Routes>
              <Route path="/" element={<IncioCadastro LightMode={light}/>} />
              <Route path="/Login" element={<Login LightMode={light}/>}/>
              <Route path="/Usuarios" element={<Usuarios />}/>
          </Routes>
      </BrowserRouter>

  )
}

export default App
