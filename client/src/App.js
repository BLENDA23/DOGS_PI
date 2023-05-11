import './App.css';
import { useEffect, useState } from "react";
import Bienvenida from "./components/bienvenida/Bienvenida";
import HomePage from "./components/homePage/HomePage";
import Nav from "./components/nav/Nav";
import About from "./components/homePage/HomePage";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import { Routes, Route,useLocation, useNavigate  } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dogs, setDogs] = useState([]);
  const [searched, setSearched] = useState(false);
  const [text, setText] = useState("")
  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("http://localhost:3001/dogs")
        const data = await res.json()
        setDogs(data)
      } catch (error) {
        console.error(error)
      }
    }
    setSearched(false)
    fetchDogData()
  }, [])
  const onSearch = (id) => {
    fetch(`http://localhost:3001/dogs/${id}`)
      .then((res) => res.json())
      .then (data => console.log (data));
  };
  return (
    <div className="App">
      <h1>Henry Dogsx</h1>
      {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path="/" element={<Bienvenida/>}></Route>
        <Route path="/homePage" element={<Cards dogs={dogs} />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
