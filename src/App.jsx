import { useState } from 'react'
import './App.css'
import ProductDetail from './components/ProductDetail'
import Product from './components/Product'

function App() {

  return (
    <div className='app'>
      <Product/>
      <ProductDetail/>
    </div>
  )
}

export default App
