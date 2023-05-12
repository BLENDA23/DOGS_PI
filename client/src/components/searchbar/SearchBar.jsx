import { useState } from "react";
import styles from "./SearchBar.module.css"
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
      <button onClick={()=>props.onSearch(dogs)}>Buscar</button>
      </div>
   );
}
