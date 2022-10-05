import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Cart from './Components/Cart/Cart'
import CustomProvider from './Context/CartContext'

function App() {

  return (
    <BrowserRouter>
     <CustomProvider>
      <ChakraProvider>
        <Header />
        <Routes>

          <Route path="/" element={<ItemListContainer />}/>
          
          <Route path="/categoria/:IdCategoria" element={<ItemListContainer />}/>
          
          <Route path="/producto/:IdProducto" element={<ItemDetailContainer />}/>
          
          <Route path="/cart" element={<Cart />}/>
          
        </Routes>
        <Footer />
      </ChakraProvider>
     </CustomProvider> 
    </BrowserRouter>
  );
}

export default App;


