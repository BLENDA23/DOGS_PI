import React, { useState, useEffect } from "react";
import { useParams, useNavigate,useLocation  } from "react-router-dom";
import styles from "./DetailTemperamento.module.css";
import CardDB from "../card/CardDB";
import Card from "../card/Card";
import SearchBar from "../searchbar/SearchBar";
export default function DetailxOrigen() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const busquedaxOrigen = queryParams.get("origen");
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true); // Variable de estado para controlar la carga de datos
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const [raza, setRaza] = useState('DB');

  useEffect(() => {
    const fetchDogDataApi = async () => {
      try {
        const res = await fetch("http://localhost:3001/dogs");
        const data = await res.json();
        let sortedData = [...data];

        setDogs(data);
        setLoading(false); // Marcar que los datos se han cargado
      } catch (error) {
        console.error(error);
      }
    };
//db db db db db 
    const fetchDogDataDB = async () => {
      try {
        const response = await fetch("http://localhost:3001/razasDB");
        const data = await response.json();
        setDogs(data);
        setLoading(false); // Marcar que los datos se han cargado
      } catch (error) {
        console.error("Error al obtener los temperamentos:", error);
      }
    };

    if (busquedaxOrigen === "API") {
      fetchDogDataApi();
      setMostrarDiv(true);
      setRaza("API");
    } else if (busquedaxOrigen === "DB") {
      fetchDogDataDB();
      setMostrarDiv(false);
      setRaza("DB");
    }
  }, [busquedaxOrigen]);

  if (loading) {
    return <div>Cargando...</div>; // Mostrar un indicador de carga mientras se obtienen los datos
  }
  
  return (
    <div >
        <SearchBar ></SearchBar>
      <h1>Razas de: {raza}</h1>
      {mostrarDiv ? (
            <div className={styles.container}>
                {dogs.map(({ id,temperament,name, bred_for, breed_group, life_span,image,weight }) => (
                <Card
                    id={id}
                    key={id}
                    name={name}
                    bred_for={bred_for}
                    breed_group={breed_group}
                    life_span={life_span}
                    image={image}
                    weight={weight}
                    temperament={temperament}
                />
                ))}
            </div>
        ) : (
          <div className={styles.container}>
            {dogs.map(({ id,nombre,temperamentos,image,tiempoVida,altura,peso }) => (
            <CardDB
                id={id}
                key={id}
                nombre={nombre}
                temperamentos={Array.isArray(temperamentos) ? temperamentos[0]?.temperamento : ''}
                image={image}
                tiempoVida={tiempoVida}
                peso={peso}
                altura={altura}
            />
            ))}
          </div>
        )}
  </div>
  );
}