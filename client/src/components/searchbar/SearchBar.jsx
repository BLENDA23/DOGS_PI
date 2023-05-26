import { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  console.log(props); // {onSearch: fn()}
  const [dogs, setDogs] = useState("");
  const [temperamentos, setTemperamentos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionOrigen, setSelectedOptionOrigen] = useState("");
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
  const handleSelectChange = (event) => {
      const { value } = event.target;
      setSelectedOption(value);
      setSelectedOptionOrigen(value);
 };

  return (
    <div className={styles.container}>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Selecciona un temperamento</option>
        {temperamentos.map((temperamento) => (
          <option key={temperamento.id} value={temperamento.temperamento}>
            {temperamento.temperamento}
          </option>
        ))}
      </select>
      <Link to={`/filtrarTemperamento/${selectedOption}`}>
        <button>FiltrarxTemperamento</button>
      </Link>

      <select value={selectedOptionOrigen} onChange={handleSelectChange}>
      <option value="xx">Seleccionar</option>
        <option value="API">API</option>
        <option value="DB">DB</option>
      </select>
      <Link to={`/filtrarxOrigen/${selectedOptionOrigen}`}>
        <button>FiltrarxOrigen</button>
      </Link>
      
        <input type="search" onChange={handleInputChange} />
      <Link to={`/busqueda/${dogs}`}>
        <button>Buscar</button>
      </Link>
    </div>
  );
}