import React from "react";
import NavBar from "./Components/NavBar/NavbBar";
import { ItemListContainer } from "./Components/NavBar/ItemListContainer";
import ItemCount from "./Components/ItemCount";
import ItemDetailContainer from "./Components/ItemDetailContainer";

import "./App.css"


const App = () => {

  const mensaje = "Las mejores ofertas de la semana"
  const onAdd = (count) => {
    console.log ("Agregaste al carro")
  }
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={mensaje}/>
    <ItemDetailContainer />
    {/*<ItemCount initial={1} stock={8} onAdd={() => {}} />*/}
    </>
  )
}

export default App



