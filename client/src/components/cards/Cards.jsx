import Card from "../card/Card";
import styles from "./Cards.module.css";
import SearchBar from "../searchbar/SearchBar";
import { useEffect, useState } from "react";
export default function Cards(props) {
  const { dogs } = props;
  console.log(dogs);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 200; // Cantidad de elementos por página
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
    <div>
      <SearchBar ></SearchBar>
      <div className={styles.container}>
      {paginatedItems.map(({ id, name, bred_for, breed_group, life_span,image,weight,temperament }) => (
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
