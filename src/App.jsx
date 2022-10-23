import "./App.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react"
import { Routes, Route } from "react-router-dom"
import HomeScreen from "./screens/home"
import Footer from "./components/footer"
import Header from "./components/header"
import Excool from "./screens/excoolPage"
import CleanDenim from "./screens/cleanDenim"
import Usual from "./screens/usual"
import Underwear from "./screens/underwear"
import Sport from "./screens/sport"
import All from "./screens/all"
import Cart from "./screens/cart"
import DetailProduct from "./screens/detailProduct"
import GoTop from "./components/scrollTopButton"
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/excool" element={<Excool />} />
        <Route path="/cleanDenim" element={<CleanDenim />} />
        <Route path="/usual" element={<Usual />} />
        <Route path="/underwear" element={<Underwear />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/all" element={<All />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/detailProduct/:selectedIndex/:productId"
          element={<DetailProduct />}
        />
      </Routes>
      <GoTop />
      <Footer />
    </div>
  )
}

export default App
