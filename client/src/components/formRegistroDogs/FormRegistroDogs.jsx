import styles from "./FormRegistroDogs.module.css";
import { useEffect, useState } from "react";
import { validate } from "./validation";
export default function FormRegistroDogs(props){
  const [razaData, setRazaData] = useState({
    nombre: "",
    peso: "",
    altura: "",
    tiempoVida: "",
    //temperamento: "raza",
    image: "",
   }); 
   const [errors, setErrors] = useState({
    nombre: "",
    peso: "",
    altura: "",
    tiempoVida: "",
    //temperamento: "raza",
    image: "",
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRazaData({
      ...razaData,
      [name]: value,
    });
    setErrors(
      validate({
        ...razaData,
        [name]: value,
      })
    );

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registroRaza(razaData);
    setRazaData({
      nombre: "",
      peso: "",
      altura: "",
      tiempoVida: "",
      //temperamento: "raza",
      image: "",
    })
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
              <label htmlFor="">Peso</label>
              <input 
                type="text" 
                name="peso" 
                value={razaData.peso} 
                onChange={handleChange}
              />
              <br />
              <label htmlFor="">Altura:</label>
              <input 
                type="text" 
                name="altura" 
                value={razaData.altura} 
                onChange={handleChange}
              />
              <br />
              <label htmlFor="">tiempoVida:</label>
              <input 
                type="text" 
                name="tiempoVida" 
                value={razaData.tiempoVida} 
                onChange={handleChange}
              />
              <br />
              <label htmlFor="">image:</label>
              <input 
                type="text" 
                name="image" 
                value={razaData.image} 
                onChange={handleChange}
              />
              <br />
              
              <button type="submit">Registrar</button>
              
              <input type="text"></input>
              
        </form>
    );
}