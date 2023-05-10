import './App.css';
import Bienvenida from "./components/bienvenida/Bienvenida";
import HomePage from "./components/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Routes>
        <Route path="/" element={<Bienvenida />}></Route>
        <Route path="/homePage" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
