import React from "react"
import styles from "./Nav.module.css"
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";
export default function HomePage(props) {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <SearchBar onSearch={(dogByRaza) => props.onSearch(dogByRaza)} />
      </div>
    );
}