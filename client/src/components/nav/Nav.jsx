import React from "react"
import styles from "./Nav.module.css"
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";
export default function HomePage(props) {
    return (
      <div className={styles.container}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/homePage">Home Page</NavLink>
        <NavLink to="/crearDog">New Dogs</NavLink>
        
        <SearchBar onSearch={(dogByRaza) => props.onSearch(dogByRaza)}></SearchBar>
      </div>
    );
}