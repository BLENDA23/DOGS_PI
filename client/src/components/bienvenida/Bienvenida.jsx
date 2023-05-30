import React from "react"
import styles from "./Bienvenida.module.css"
import { NavLink } from "react-router-dom";
export default function Bienvenida(props) {
    return (
      <div className={styles.background}>
        <div>
        <h1>Bienvenidos a mi primer PI</h1>
        <br/>
        <NavLink to="/homePage"><button>HOME PAGE</button></NavLink>
        </div>
      </div>
    );
}