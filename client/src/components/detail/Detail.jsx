import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";
//falta que salga imagen del perro xxx
export default function Detail(props) {
  const navigate = useNavigate();
  const { detailId } = useParams();
  const [dogs, setDogs] = useState([]);
 
  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
            `http://localhost:3001/dogsDetail/${detailId}`
        )
        const data = await res.json()
        setDogs(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSingleDogData()
  }, [detailId])

  return (
    <div>
        <button onClick={() => navigate(-1)}>Regresar</button>
        {dogs.map((item) => (
            <div key={item.id} className={styles.containerInfo}>
                <h1>{item.name}</h1>
                <ul>
                    <li>Peso: {item.weight.metric}</li>
                    <li>Altura: {item.height.metric}</li>
                    <li>Criado Para: {item.bred_for}</li>
                    <li>Raza Grupo: {item.breed_group}</li>
                    <li>Esperanza de Vida: {item.life_span}</li>
                    <li>Temperamento: {item.temperament}</li>
                    <li>Origen: {item.origin}</li>
                    <li>Esperanza de Vida: {item.life_span}</li>

                </ul>    
            </div>
        ))}
    </div>
   
  );
}
