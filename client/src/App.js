import './App.css';
import { useEffect, useState } from "react";
import Bienvenida from "./components/bienvenida/Bienvenida";
import HomePage from "./components/homePage/HomePage";
import Nav from "./components/nav/Nav";
import About from "./components/homePage/HomePage";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import DetailBusqueda from "./components/busqueda/DetailBusqueda";
import FormRedistroDogs from "./components/formRegistroDogs/FormRegistroDogs";
import { Routes, Route,useLocation, useNavigate  } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dogs, setDogs] = useState([]);
  const [searched, setSearched] = useState([]);
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
   // setSearched(false)
    fetchDogData()
  }, [])
  /*
  const ejemplo={
    weight: {
        imperial: "6 - 13",
        metric: "3 - 6"
    },
    height: {
        imperial: "9 - 11.5",
        metric: "23 - 29"
    },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
    image: {
        id: "BJa4kxc4X",
        width: 1600,
        height: 1199,
        url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    }
}
*/
  const onSearch = async (id) => {
    //console.log(ejemplo)
   // setDogs([...dogs,ejemplo])
    try{
      const res = await fetch(`http://localhost:3001/dogs/${id}`)
      const data = await res.json()
      .then (data => setDogs([...searched, data]));
    }catch(error){
      console.error(error)
    }
  };
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
          alert('Error al enviar los datos');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
  }
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
      </Routes>
    </div>
  );
}

export default App;
