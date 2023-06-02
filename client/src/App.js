import './App.css';
import { useEffect, useState } from "react";
import Bienvenida from "./components/bienvenida/Bienvenida";

import HomePage from "./components/homePage/HomePage";
import Nav from "./components/nav/Nav";
import About from "./components/homePage/HomePage";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import DetailBusqueda from "./components/busqueda/DetailBusqueda";
import DetailxOrigen from "./components/filtros/DetailxOrigen";
import FormRedistroDogs from "./components/formRegistroDogs/FormRegistroDogs";
import { Routes, Route,useLocation, useNavigate,useParams  } from "react-router-dom";
function App() {
  const [dogs, setDogs] = useState([]);
  const [dogsxTemperamento, setDogsxTemperamento] = useState([]);//para razasxtemperamento
  const location = useLocation();
  const busquedaTemperamento = location.pathname.split('/').pop();
  const filtrarAz = location.pathname.split('/').pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/dogs")
        const data = await res.json()
        let sortedData = data; // Guarda los datos originales sin ordenar
        if (filtrarAz === 'A-Z') {
          sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (filtrarAz === 'Z-A') {
          sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
        }
        setDogs(sortedData);
      } catch (error) {
        console.error(error)
      }
    }
    fetchData();
  }, [filtrarAz]);
  const registroRaza=async (razaData)=>{
      const{nombre,peso,altura,tiempoVida,image,temperamento}=razaData;
      const url='http://localhost:3001/dogsP/';
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre,
            peso,
            altura,
            tiempoVida,
            image,
            temperamento,
          }),
        });
  
        if (response.ok) {
          // Procesa la respuesta exitosa
          console.log('Datos enviados correctamente');
          alert('se registro correctamente');
        } else {
          // Procesa la respuesta de error
          console.error('Error al enviar los datos:', response.status);
          alert('Error al enviar los datos registroRaza');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
  }
  //razas por temperamento
  useEffect(() => {
    const fetchTemperamento = async () => {
      
      try {
        const res = await fetch(
            `http://localhost:3001/razasxtemperamentos/${busquedaTemperamento}`
        )
        const data = await res.json()
        let sortedData = data; // Guarda los datos originales sin ordenar
        if (filtrarAz === 'A-Z') {
          sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (filtrarAz === 'Z-A') {
          sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
        }
        setDogsxTemperamento(sortedData);
      } catch (error) {
        console.error(error)
      }
    }
    fetchTemperamento()
  }, [location])

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route path="/" element={<Bienvenida/>}></Route>
        <Route path="/homePage" element={<Cards dogs={dogs}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/crearDog" element={<FormRedistroDogs registroRaza={registroRaza}/>}></Route>
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/busqueda/:busquedaId" element={<DetailBusqueda />} />
        <Route path="/filtrarTemperamento/:busquedaTemperamento" element={<Cards dogs={dogsxTemperamento}/>} />
        <Route path="/filtrarxOrigen" element={<DetailxOrigen/>}/>
        <Route path="/filtrarxAZ/:filtrarAz" element={<Cards dogs={dogs}/>}/>
      </Routes>
    </div>
  );
}

export default App;