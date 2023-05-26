import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailTemperamento.module.css";
import Card from "../card/Card";
import SearchBar from "../searchbar/SearchBar";
export default function DetailxOrigen() {
  const navigate = useNavigate();
  const { busquedaxOrigen } = useParams();
  const [dogs, setDogs] = useState([]);
  var mostrarDiv=false;
  var raza='DB';
    useEffect(() => {
        const fetchDogData = async () => {
          try {
            const res = await fetch("http://localhost:3001/dogs")
            const data = await res.json()
            setDogs(data);
          } catch (error) {
            console.error(error)
          }
        }
        if(busquedaxOrigen=='API'){
            fetchDogData()
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
                <h1>dogs de bd</h1>
            </div>
        )}
  </div>
  );
}
