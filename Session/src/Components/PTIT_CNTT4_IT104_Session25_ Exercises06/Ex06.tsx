import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import './Header.css'
import Home from '../PTIT_CNTT4_IT104_Session25_ Exercises01/Home'
import Detail from './Detail'
import Product from './Product'

export default function Ex06() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/detail" element={<Detail></Detail>} />
        <Route path="/product" element={<Product></Product>} />
      </Routes>
    </BrowserRouter>
  )
}