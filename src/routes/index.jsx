import React,{ lazy,Suspense } from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
import Home from '@/pages/home'
const Myorder = lazy(()=>import('@/pages/myorder'))
const PlaceOrder = lazy(()=>import('@/pages/place-order'))
const ShoppingCart = lazy(() =>import('@/pages/shopping-cart'))

export default function RoutesConfig() {
  return (
    <Suspense fallback={<div>loading...</div>}>
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true}/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/myorder" element={<Myorder/>}></Route>
            <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
            <Route path="/buy" element={<PlaceOrder/>}></Route>
            <Route path="/buy/:id" element={<PlaceOrder/>}></Route>
        </Routes>
    </Suspense>
  )
}
