import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailTemperamento.module.css";
import Card from "../card/Card";
import SearchBar from "../searchbar/SearchBar";
export default function DetailTemperamento() {
  const navigate = useNavigate();
  const { busquedaTemperamento } = useParams();
  console.log(busquedaTemperamento)
  console.log(busquedaTemperamento)
  const [dogs, setDogs] = useState([]);
 
  useEffect(() => {
    const fetchTemperamento = async () => {
      try {
        const res = await fetch(
            `http://localhost:3001/razasxtemperamentos/${busquedaTemperamento}`
        )
        const data = await res.json()
        setDogs(data)
        console.log('data');
          console.log(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchTemperamento()
  }, [busquedaTemperamento])
  //para paginado
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Cantidad de elementos por página
  const totalItems = 100; // Cantidad total de elementos en la lista
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Cálculo del rango de índices de los elementos a mostrar
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtrado de elementos según el rango de índices
  const paginatedItems = dogs.slice(startIndex, endIndex);

  return (
    
    <div >
      <SearchBar ></SearchBar>
      <h2>Todos las razas que tengan el temperamento: {busquedaTemperamento}</h2>
      <div className={styles.container}>
    {paginatedItems.map(({ id,temperament,name, bred_for, breed_group, life_span,image,weight }) => (
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
    <div>
        {/* Botones de paginación */}
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Anterior
          </button>
        )}

        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Siguiente
          </button>
        )}
    </div>
  </div>
  );
}
