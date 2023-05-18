import './App.css';
import { useEffect, useState } from "react";
import Bienvenida from "./components/bienvenida/Bienvenida";
import HomePage from "./components/homePage/HomePage";
import Nav from "./components/nav/Nav";
import About from "./components/homePage/HomePage";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import FormRedistroDogs from "./components/formRegistroDogs/FormRegistroDogs";
import { Routes, Route,useLocation, useNavigate  } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dogs, setDogs] = useState([]);
  const [registro, setRegistro] = useState(false);
  //const [searched, setSearched] = useState(false);
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
      .then (data => setDogs([...dogs, data]));
    }catch(error){
      console.error(error)
    }
  };
  const registroRaza=async (razaData)=>{
      const{nombre,peso,altura,tiempoVida,image}=razaData;
      const data= new URLSearchParams(`nombre=${nombre}&peso=${peso}&altura=${altura}&tiempoVida=${tiempoVida}&image=${image}`);
      fetch('http://localhost:3001/dogsP/',{
        method: 'POST',
        body: data
      }).then(function(response){
        if(response.ok) {
          return response.text()
        } else {
          throw "Error en la llamada Fetch";
        }
      }).then(function(texto) {
        console.log(texto);
        alert('se registro correctamente')
     })
     .catch(function(err) {
        console.log(err);
     });
      
  }
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path="/" element={<Bienvenida/>}></Route>
        <Route path="/homePage" element={<Cards dogs={dogs} />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/crearDog" element={<FormRedistroDogs registroRaza={registroRaza}/>}></Route>
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
