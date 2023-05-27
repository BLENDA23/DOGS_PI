import styles from "./Card.module.css";
export default function CardDB({ id,nombre,temperamentos,image,tiempoVida,altura,peso}) {
    return (
         <div className={styles.container}>
            <div className={styles.imageContainer}>
                <h3>La raza {nombre} tiene un tiempo promedio de vida de: {tiempoVida} años la altura promedio es de: {altura} cm y el peso promedio es de {peso}gr sus temperamentos pueden ser: {temperamentos}</h3>
                <img src={image} alt="Not found" />
            </div>
         </div>
    );
 }
 