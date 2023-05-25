import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";
export default function Detail(props) {
  const navigate = useNavigate();
  const { detailId } = useParams();
  const [dogs, setDogs] = useState([]);
 
  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
            `http://localhost:3001/dogs/${detailId}`
        )
        const data = await res.json()

        .then (data => setDogs([...dogs, data]));
        console.log(dogs)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSingleDogData()
  }, [detailId])

  return (
    <div>
        {dogs.map((item) => (
            <div key={item.id} className={styles.containerInfo}>
                <h1>{item.name}</h1>
                <img src={item.image.url} alt="Not found" />
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
        <button className={styles.buttonDetail} onClick={() => navigate(-1)}>Regresar</button> 
    </div>
   
  );
}
