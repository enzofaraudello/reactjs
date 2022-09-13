import React from "react";
import NavBar from "./Components/NavBar/NavbBar";
import { ItemListContainer } from "./Components/NavBar/ItemListContainer";
import ItemCount from "./Components/ItemCount";



const App = () => {
  const mensaje = "Las mejores ofertas de la semana"
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={mensaje}/>
    <ItemCount />
    </>
  )
}

export default App



