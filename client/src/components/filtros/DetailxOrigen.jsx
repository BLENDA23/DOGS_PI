import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailTemperamento.module.css";
import CardDB from "../card/CardDB";
import Card from "../card/Card";
import SearchBar from "../searchbar/SearchBar";
export default function DetailxOrigen() {
  const navigate = useNavigate();
  const { busquedaxOrigen } = useParams();
  const [dogs, setDogs] = useState([]);
  var mostrarDiv=false;
  var raza='DB';
    useEffect(() => {
        const fetchDogDataApi = async () => {
          try {
            const res = await fetch("http://localhost:3001/dogs")
            const data = await res.json()
            setDogs(data);
          } catch (error) {
            console.error(error)
          }
        }
        if(busquedaxOrigen=='API'){
          fetchDogDataApi()
        }
    }, [])
    useEffect(() => {
      const fetchDogDataDB = async () => {
        try {
          const response = await fetch("http://localhost:3001/razasDB");
          const data = await response.json();
          setDogs(data);
          console.log('data')
          console.log(data)
          /*
          const razas2 = data.map((item) => ({
            id: item.id,
            nombre: item.nombre
          }));
          */
         // setDogs(razas2);
         
        } catch (error) {
          console.error("Error al obtener los temperamentos:", error);
        }
      };
      if(busquedaxOrigen=='DB'){
        fetchDogDataDB()
        console.log('dogs')
        console.log(dogs)
      }
    }, [])

      if(busquedaxOrigen=='API'){
        mostrarDiv = true;
        raza='API'
     }

  return (
    <div >
        <SearchBar ></SearchBar>
      <h1>Razas de: {raza}</h1>
      {mostrarDiv ? (
            <div>
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
          <div>
            {dogs.map(({ id,nombre,temperamentos,image,tiempoVida,altura,peso }) => (
            <CardDB
                id={id}
                nombre={nombre}
                temperamentos={temperamentos}
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
