import styles from "./FormRegistroDogs.module.css";
import { useEffect, useState } from "react";
export default function FormRegistroDogs(props){
  const [pesoMaximo, setPesoMaximo] = useState('');
  const [pesoMinimo, setPesoMinimo] = useState('');
  const [razaData, setRazaData] = useState({
    nombre: "",
    peso: "",
    altura: "",
    tiempoVida: "",
    temperamento:"",
    image: "",
   }); 
   const [errores, setErrores] = useState({});

   const handleInputChange = (event) => {
    const valor = event.target.value;

  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRazaData({
      ...razaData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevosErrores = {};
    
    // Validar el nombre
    if (!razaData.nombre) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }
    if (!razaData.peso) {
      nuevosErrores.peso = 'campo obligatorio';
    }
    if (!razaData.altura) {
      nuevosErrores.altura = 'campo obligatorio';
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
      // Enviar el formulario
      props.registroRaza(razaData);
      //pone en blanco a campos
      setRazaData({
        nombre: "",
        peso: "",
        altura: "",
        tiempoVida: "",
        temperamento: "",
        image: "",
      })
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
              <label htmlFor="">Peso</label>
              <input 
                type="text" 
                name="peso" 
                value={razaData.peso} 
                onChange={handleChange}
              />
              <br />
              {errores.peso && <span>{errores.peso}</span>}
              <br />
              <label htmlFor="">Altura:</label>
              <input 
                type="text" 
                name="altura" 
                value={razaData.altura} 
                onChange={handleChange}
              />
              <br />
              {errores.altura && <span>{errores.altura}</span>}
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
                handleInputChange ={handleInputChange }
              />
              <br />
              {errores.image && <span>{errores.image}</span>}
              <br />
              
              <button type="submit">Registrar</button>
              
              <input type="text"></input>
              
        </form>
    );
}