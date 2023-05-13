import styles from "./FormRegistroDogs.module.css";
import { useEffect, useState } from "react";
export default function FormRegistroDogs(props){
    return(
        <form >
              <img
                src="https://t1.ea.ltmcdn.com/es/posts/5/6/2/10_caracteristicas_de_los_perros_24265_600_square.jpg"
                alt="Not found"
              />
              <br />
              <label htmlFor="">Ingrese raza:</label>
              <input type="text" name="raza"/>
              <br />
              <label htmlFor="">Peso</label>
              <input type="text" name="peso"/>
              <br />
              <label htmlFor="">Altura:</label>
              <input type="text" name="altura"/>
              <br />
              <label htmlFor="">Criado Para:</label>
              <input type="text" name="criado_para"/>
              <br />
              <label htmlFor="">Temperamento:</label>
              <input type="text" name="temperamento"/>
              <br />
              <label htmlFor="">Origen:</label>
              <input type="text" name="origen"/>
              <br />
              <button type="submit">Registrar</button>
              
        </form>
    );
}
