import { useState } from "react";
import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   //console.log(props) // {onSearch: fn()}
   const [dogs, setDogs] = useState("")
   const handleSubmit = (event) => {
      const {value} = event.target
      setDogs(value)
   }
   return (
      <div className={styles.container}>
         <input type='search' onChange={handleSubmit}/>
      <button onClick={()=>props.onSearch(dogs)}>Buscar</button>
      </div>
   );
}
