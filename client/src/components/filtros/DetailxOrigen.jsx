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
  const orden = queryParams.get("orden");
  const peso = queryParams.get("peso");
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

        if (orden === "A-Z") {
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (orden === "Z-A") {
          sortedData.sort((a, b) => b.name.localeCompare(a.name));
        }
        if (orden === "A-Z") {
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (orden === "Z-A") {
          sortedData.sort((a, b) => b.name.localeCompare(a.name));
        }

        setDogs(sortedData);
        setLoading(false); // Marcar que los datos se han cargado
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDogDataDB = async () => {
      try {
        const response = await fetch("http://localhost:3001/razasDB");
        const data = await response.json();
        let sortedData = [...data];

        if (orden === "A-Z") {
          sortedData.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (orden === "Z-A") {
          sortedData.sort((a, b) => b.nombre.localeCompare(a.nombre));
        }
        
        setDogs(sortedData);
        setLoading(false); // Marcar que los datos se han cargado
      } catch (error) {
        console.error("Error al obtener los temperamentos:", error);
      }
    };

    if (busquedaxOrigen === "API" && (orden=='A-Z' || orden=='Z-A')) {
      fetchDogDataApi();
      setMostrarDiv(true);
      setRaza("API");
    } else if (busquedaxOrigen === "DB" &&(orden=='A-Z' || orden=='Z-A')) {
      fetchDogDataDB();
      setMostrarDiv(false);
      setRaza("DB");
    }
  }, [busquedaxOrigen, orden]);

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