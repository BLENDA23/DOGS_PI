import styles from "./FormRegistroDogs.module.css";
import { useEffect, useState } from "react";
export default function FormRegistroDogs(props){
  const [pesoMaximo, setPesoMaximo] = useState('');
  const [pesoMinimo, setPesoMinimo] = useState('');
  const [alturaMaxima, setAlturaMaxima] = useState('');
  const [alturaMinima, setAlturaMinima] = useState('');
  const [razaData, setRazaData] = useState({
    nombre: "",
    peso: "",
    altura: "",
    tiempoVida: "",
    temperamento:"",
    image: "",
   }); 
   const [errores, setErrores] = useState({});

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
    if (!razaData.temperamento) {
      nuevosErrores.temperamento = 'campo obligatorio';
    }
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length === 0) {
      // Combinar el valor de peso y peso máximo con un guion
      const pesoCompleto = `${pesoMinimo}-${pesoMaximo}`;
      const alturaCompleto = `${alturaMinima}-${alturaMaxima}`;
      // Enviar el formulario con los datos actualizados
      console.log(alturaCompleto);
      const datosActualizados = {
        ...razaData,
        peso: pesoCompleto,
        altura: alturaCompleto
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
              <label htmlFor="">Peso Minimo</label>
              <input 
                type="text" 
                name="pesoMinimo" 
                value={pesoMinimo} 
                onChange={handlePesoMinimoChange}
              />
              <br />
              {errores.pesoMinimo&& <span>{errores.pesoMinimo}</span>}
              <br />
              <label htmlFor="">Peso Maximo</label>
              <input 
                type="text" 
                name="pesoMaximo" 
                value={pesoMaximo} 
                onChange={handlePesoMaximoChange}
              />
              <br />
              {errores.pesoMaximo && <span>{errores.pesoMaximo}</span>}
              <br />
              <label htmlFor="">Altura Minima:</label>
              <input 
                type="text" 
                name="alturaMinima" 
                value={alturaMinima} 
                onChange={handleAlturaMinimaChange}
              />
              <br />
              {errores.alturaMinima && <span>{errores.alturaMinima}</span>}
              <br />
              <label htmlFor="">Altura Maxima:</label>
              <input 
                type="text" 
                name="alturaMaxima" 
                value={alturaMaxima} 
                onChange={handleAlturaMaximaChange}
              />
              <br />
              {errores.alturaMaxima && <span>{errores.alturaMaxima}</span>}
              <br />
              <label htmlFor="">tiempoVida:</label>
              <input 
                type="text" 
                name="tiempoVida" 
                value={razaData.tiempoVida} 
                onChange={handleChange}
              />
              <br />
              {errores.tiempoVida && <span>{errores.tiempoVida}</span>}
              <br />
              <label htmlFor="">temperamento:</label>
              <input 
                type="text" 
                name="temperamento" 
                value={razaData.temperamento} 
                onChange={handleChange}
              />
              
              <br />
              {errores.temperamento && <span>{errores.temperamento}</span>}
              <br />
              <label htmlFor="">image:</label>
              <input 
                type="text" 
                name="image" 
                value={razaData.image} 
                onChange={handleChange}
              />
              <br />
              {errores.image && <span>{errores.image}</span>}
              <br />
              <button type="submit">Registrar</button>
        </form>
    );
}