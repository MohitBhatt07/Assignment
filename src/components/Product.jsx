import React from 'react'
import '../styles/Product.scss';
import ProductImg from '../assets/xyzzzz.png';

const Product = () => {
  return (
    <div className='product-frame'>
      <img src ={ProductImg}/>
    </div>
  )
}

export default Product