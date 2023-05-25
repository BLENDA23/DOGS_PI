import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailTemperamento.module.css";
import Card from "../card/Card";
export default function DetailTemperamento() {
  const navigate = useNavigate();
  const { busquedaTemperamento } = useParams();
  const [dogs, setDogs] = useState([]);
 
  useEffect(() => {
    const fetchTemperamento = async () => {
      try {
        const res = await fetch(
            `http://localhost:3001/razasxtemperamentos/${busquedaTemperamento}`
        )
        const data = await res.json()
        setDogs(data)
        console.log('data');
          console.log(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchTemperamento()
  }, [busquedaTemperamento])
  return (
    <div>
      <h1>hola</h1>
    </div>
  );
}
