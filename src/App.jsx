import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import CartContainer from "./components/pages/cart/CartContainer"
import { Navbar } from "./components/layout/navbar/Navbar"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"
import Checkout from "./components/pages/checkout/Checkout"


function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/category/:name" element={<ItemListContainer/>} />
      <Route path="/cart" element={<CartContainer />} />
      <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
      <Route path="/checkout" element={<Checkout/>}/>

      <Route path="*" element={ <h1>Error 404 not founded</h1> } />

    </Routes>
  </BrowserRouter>
  )
}

export default App
