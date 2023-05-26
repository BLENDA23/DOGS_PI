import styles from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card({ name,image,weight,temperament}) {
    return (
      
      <Link to={`/detail/${name}`} >
         <div className={styles.container}>
            <div className={styles.imageContainer}>
            <h3>{weight.metric}</h3> 
            <h3>Peso:</h3>
            <h3>{temperament}</h3> 
            <h3>Temperamentos: </h3>
            <h2 className={styles.name}>{name}</h2>
            <img src={image.url} alt="Not found" />
            </div>
            
         </div>
         
        
      </Link>
      
    );
 }
 