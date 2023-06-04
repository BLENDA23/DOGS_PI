import { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { Link,useNavigate  } from "react-router-dom";

export default function SearchBar(props) {
  console.log(props); // {onSearch: fn()}
  const navigate = useNavigate();
  const [dogs, setDogs] = useState("");
  const [temperamentos, setTemperamentos] = useState([]);
  const [selectedOptionTem, setSelectedOptionTem] = useState("");
  const [selectedOptionOrigen, setSelectedOptionOrigen] = useState("");
  const [selectedOptionAZ, setSelectedOptionAZ] = useState("");
  const [selectedOptionPeso, setSelectedOptionPeso] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  useEffect(() => {
    fetchTemperamentos();
  }, []);

  const fetchTemperamentos = async () => {
    try {
      const response = await fetch("http://localhost:3001/temperamentosDB");
      const data = await response.json();
      const temperamentos2 = data.map((item) => ({
        id: item.idTemperamento,
        temperamento: item.temperamento,
      }));
      setTemperamentos(temperamentos2);
    } catch (error) {
      console.error("Error al obtener los temperamentos:", error);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setDogs(value);
  };
  const handleSelectChangeTemp = (event) => {
      const { value } = event.target;
      setSelectedOptionTem(value);
      setShowSelect(true);
      navigate(`/filtrarTemperamento/${value}`);
  };
  const handleSelectChangeOrigen = (event) => {
    const { value } = event.target;
    setSelectedOptionOrigen(value);
  };

  const handleSelectChangePeso = (event) => {
    const { value } = event.target;
    setSelectedOptionPeso(value);
  };
  const handleSelectChangeAz = (event) => {
    const { value } = event.target;
    setSelectedOptionAZ(value);
  };


 

  return (
    <div className={styles.container}>
      <div>
      
        <select value={selectedOptionTem} onChange={handleSelectChangeTemp}>
          <option value="">Selecciona un temperamento</option>
          {temperamentos.map((temperamento) => (
            <option key={temperamento.id} value={temperamento.temperamento}>
              {temperamento.temperamento}
            </option>
          ))}
        </select>
        
      </div>
      {showSelect && (
        <div>
          <select value={selectedOptionAZ} onChange={handleSelectChangeAz}>
          <option value="xx">Seleccionar</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <Link to={`/filtrarxAZ/${selectedOptionAZ}/${selectedOptionTem}`}>
            <button>Ordenar</button>
          </Link>

          <select value={selectedOptionPeso} onChange={handleSelectChangePeso }>
          <option value="xx">Seleccionar Peso</option>
            <option value="1-10">Menor-Mayor</option>
            <option value="10-1">Mayor-menor</option>
          </select>
          <Link to={`/filtrarTempxPeso/${selectedOptionPeso}/${selectedOptionTem}`}>
            <button>Ordenar</button>
          </Link>

          
        </div>
        
      )}
      
      <div>
        <select value={selectedOptionOrigen} onChange={handleSelectChangeOrigen}>
        <option value="xx">Seleccionar</option>
          <option value="API">API</option>
          <option value="DB">DB</option>
        </select>
        <Link to={`/filtrarxOrigen?origen=${selectedOptionOrigen}`}>
          <button>FiltrarxOrigen</button>
        </Link>
      </div>
      
      <div>
          <input type="search" onChange={handleInputChange} />
        <Link to={`/busqueda/${dogs}`}>
          <button>Buscar</button>
        </Link>
      </div>
      <Link to={`/homePage`}>
        <button>RESET</button>
      </Link>
      
    </div>
  );
}