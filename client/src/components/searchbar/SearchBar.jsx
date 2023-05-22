import { useState } from "react";
import styles from "./SearchBar.module.css"
import { Link } from "react-router-dom";
export default function SearchBar(props) {
   console.log(props) // {onSearch: fn()}
   const [dogs, setDogs] = useState("")
   const handleInputChange = (event) => {
      const {value} = event.target
      setDogs(value)
   }

   return (
      <div className={styles.container}>
         <input type='search' onChange={handleInputChange}/>
         <Link to={`/busqueda/${dogs}`} >
            <button onClick={()=>(dogs)}>Buscar</button>
         </Link>
      </div>
   );
}
