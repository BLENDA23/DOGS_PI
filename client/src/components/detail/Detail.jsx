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
                <img src={item.image.url} alt="Not found" height='200px'/>
                <ul className={styles.columnList}>
                    <li><p className={styles.listItem}>Peso:</p> {item.weight.metric}</li>
                    <li><p className={styles.listItem}>Altura:</p> {item.height.metric}</li>
                    <li><p className={styles.listItem}>Criado Para:</p> {item.bred_for}</li>
                    <li><p className={styles.listItem}>Raza Grupo:</p> {item.breed_group}</li>
                    <li><p className={styles.listItem}>Esperanza de Vida:</p> {item.life_span}</li>
                    <li><p className={styles.listItem}>Temperamento:</p> {item.temperament}</li>
                    <li><p className={styles.listItem}>Origen:</p> {item.origin}</li>
                    <li><p className={styles.listItem}>Esperanza de Vida:</p> {item.life_span}</li>
                </ul>  
            </div>
        ))}
        <button className={styles.buttonDetail} onClick={() => navigate(-1)}>Regresar</button> 
    </div>
   
  );
}
