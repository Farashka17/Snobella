
import './App.css'
import DescAndRewMenu from './components/detailPage/descAndRewMenu'
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import CartPage from './pages/cart/cart'

import HomePage from './pages/home/home'
import ProductList from './pages/productList/productList'
import ProductPage from './pages/productPage/productPage'
import {Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/productlist" element={<ProductList/>} />
      <Route path="/product/:productId" element={<ProductPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="*" element={<HomePage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
 {/* <HomePage/> */}
   
    {/* <ProductList/>  */}
     {/* <ProductPage/>  */}
   {/* <CartPage/> */}