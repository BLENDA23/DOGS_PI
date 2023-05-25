import styles from "./FormRegistroDogs.module.css";
import { useEffect, useState } from "react";
export default function FormRegistroDogs(props){
  const [pesoMaximo, setPesoMaximo] = useState('');
  const [pesoMinimo, setPesoMinimo] = useState('');
  const [alturaMaxima, setAlturaMaxima] = useState('');
  const [alturaMinima, setAlturaMinima] = useState('');
  //buscador
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTemperamentos, setSelectedTemperamentos] = useState([]);
  const [selectedIdTemperamentos, setSelectedIdTemperamentos] = useState([]);
  const [razaData, setRazaData] = useState({
    nombre: "",
    peso: "",
    altura: "",
    tiempoVida: "",
    temperamento:"",
    image: "",
   }); 
   const [errores, setErrores] = useState({});
   //buscador
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };
  const handleSearch = async () => {
    try {
      // Realizar la solicitud a la API con el término de búsqueda
      const response = await fetch(`http://localhost:3001/temperamentosDB/${searchTerm}`);
      const data = await response.json();
      const temperamentos = data.map((item) => ({ id: item.idTemperamento, temperamento: item.temperamento })); // Obtener los valores de 'idTemperamento' y 'temperamento'
      setSearchResults([...searchResults, ...temperamentos]); // Agregar los valores al estado 'searchResults'
      console.log("searchResults", temperamentos);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
      setErrores({ ...errores, searchError: "Error al realizar la búsqueda" });
    }
    setSearchTerm("");
  };
  const handleSelect = (result) => {
    // Lógica para manejar la selección del resultado
    console.log("Resultado seleccionado:", result);
    setSelectedTemperamentos([...selectedTemperamentos, result.temperamento]);
    setSelectedIdTemperamentos([...selectedIdTemperamentos, result.id]);
    console.log("selectedTemperamentos");
    console.log(selectedTemperamentos);
    console.log("selected id Temperamentos");
    console.log(selectedIdTemperamentos);
    setSearchResults([]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRazaData({
      ...razaData,
      [name]: value,
    }); 
  };
  const handlePesoMaximoChange = (event) => {
    setPesoMaximo(event.target.value);
  };
  const handlePesoMinimoChange = (event) => {
    setPesoMinimo(event.target.value);
  };
  const handleAlturaMaximaChange = (event) => {
    setAlturaMaxima(event.target.value);
  };
  const handleAlturaMinimaChange = (event) => {
    setAlturaMinima(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevosErrores = {};
    
    // Validar el nombre
    if (!razaData.nombre) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }
    if (selectedTemperamentos.length === 0) {
      nuevosErrores.selectedTemperamentos = 'campo obligatorio';
    }
    if (!pesoMinimo) {
      nuevosErrores.pesoMinimo = 'campo obligatorio';
    }
    if (!pesoMaximo) {
      nuevosErrores.pesoMaximo = 'campo obligatorio';
    }
    if (!alturaMaxima) {
      nuevosErrores.alturaMaxima = 'campo obligatorio';
    }
    if (!alturaMinima) {
      nuevosErrores.alturaMinima = 'campo obligatorio';
    }
  
    if (!razaData.tiempoVida) {
      nuevosErrores.tiempoVida = 'campo obligatorio';
    }
    if (!razaData.image) {
      nuevosErrores.image = 'campo obligatorio';
    }

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length === 0) {
      // Combinar el valor de peso y peso máximo con un guion
      const pesoCompleto = `${pesoMinimo}-${pesoMaximo}`;
      const alturaCompleto = `${alturaMinima}-${alturaMaxima}`;
      // Enviar el formulario con los datos actualizados
      console.log(alturaCompleto);
      console.log("selectedIdTemperamentos");
      console.log(selectedIdTemperamentos);
      var cadenaTemperamento=selectedIdTemperamentos.toString();
      console.log("cadenaTemperamento");
      console.log(cadenaTemperamento);
      const datosActualizados = {
        ...razaData,
        peso: pesoCompleto, 
        altura: alturaCompleto,
        temperamento:cadenaTemperamento
      };
      props.registroRaza(datosActualizados);
      //pone en blanco a campos
      setRazaData({
        nombre: "",
        peso: "",
        altura: "",
        tiempoVida: "",
        temperamento: "",
        image: "",
      });
      setPesoMaximo("");
      setPesoMinimo("");
      setAlturaMaxima("");
      setAlturaMinima("");
      setSelectedTemperamentos([]);
      setSelectedIdTemperamentos([]);
    }
    
  };

    return(
        <form onSubmit={handleSubmit}>
              <img
                src="https://t1.ea.ltmcdn.com/es/posts/5/6/2/10_caracteristicas_de_los_perros_24265_600_square.jpg"
                alt="Not found"
              />
              <br />
              <label htmlFor="">Ingrese raza:</label>
              <input 
                type="text" 
                value={razaData.nombre}
                name="nombre" 
                onChange={handleChange} 
                //className={errors.nombre}
              />
              <br />
              {errores.nombre && <span>{errores.nombre}</span>}
              <br />
              <label htmlFor="">Peso Minimo(kg):</label>
              <input 
                type="number" 
                name="pesoMinimo" 
                value={pesoMinimo} 
                onChange={handlePesoMinimoChange}
              />
              <br />
              {errores.pesoMinimo&& <span>{errores.pesoMinimo}</span>}
              <br />
              <label htmlFor="">Peso Maximo(kg):</label>
              <input 
                type="number" 
                name="pesoMaximo" 
                value={pesoMaximo} 
                onChange={handlePesoMaximoChange}
              />
              <br />
              {errores.pesoMaximo && <span>{errores.pesoMaximo}</span>}
              <br />
              <label htmlFor="">Altura Minima(cm):</label>
              <input 
                type="number" 
                name="alturaMinima" 
                value={alturaMinima} 
                onChange={handleAlturaMinimaChange}
              />
              <br />
              {errores.alturaMinima && <span>{errores.alturaMinima}</span>}
              <br />
              <label htmlFor="">Altura Maxima(cm):</label>
              <input 
                type="number" 
                name="alturaMaxima" 
                value={alturaMaxima} 
                onChange={handleAlturaMaximaChange}
              />
              <br />
              {errores.alturaMaxima && <span>{errores.alturaMaxima}</span>}
              <br />
              <label htmlFor="">TiempoVida(en años):</label>
              <input 
                type="number" 
                name="tiempoVida" 
                value={razaData.tiempoVida} 
                onChange={handleChange}
              />
              <br />
              {errores.tiempoVida && <span>{errores.tiempoVida}</span>}
              <br />
              <label htmlFor="">Imagen:</label>
              <input 
                type="text" 
                name="image" 
                value={razaData.image} 
                onChange={handleChange}
              />
              <br />
              {errores.image && <span>{errores.image}</span>}
              <br />
              <label htmlFor="">Temperamento</label>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar..."
              />
              <button type="button" onClick={handleSearch}>Buscar</button>
              <ul>
                {searchResults.map((result) => (
                  <li key={result.id} onClick={() => handleSelect(result)}>
                    {result.temperamento}
                  </li>
                ))}
              </ul>
              <input type="text" value={selectedTemperamentos} readOnly />
              {errores.selectedTemperamentos && <span>{errores.selectedTemperamentos}</span>}
              <input type="hidden" value={selectedIdTemperamentos} readOnly />
              <br />
              <button type="submit">Registrar</button>
        </form>
    );
}