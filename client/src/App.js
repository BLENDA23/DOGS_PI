import './App.css';
import Bienvenida from "./components/bienvenida/Bienvenida";
import HomePage from "./components/homePage/HomePage";
import Nav from "./components/nav/Nav";
import About from "./components/homePage/HomePage";
import { Routes, Route,useLocation, useNavigate  } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="App">
      <h1>Henry Dogsx</h1>
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route path="/" element={<Bienvenida/>}></Route>
        <Route path="/homePage" element={<HomePage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
