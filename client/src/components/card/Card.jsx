import styles from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card({ id,name, bred_for, breed_group, life_span,image}) {
    return (
      <Link to={`/detail/${name}`} >
         <div className={styles.imageContainer}>
            <h2>{name}</h2>
            <img src={image.url} alt="Not found" />
         </div>
      </Link>
    );
 }
 