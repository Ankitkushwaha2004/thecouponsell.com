import { useState } from 'react'  
import Nav from './nav'
import './index.css'

import Popular from './Popular'
import ProductPage from './assets/components/productpage'
import DashBoard from './DashBoard'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
function App() {
  var data = [
      {
        "company_name": "GlamGlow Studio",
        "id": "COUPON001",
        "code": "GLAM20",
        "description": "20% off on all makeup products.",
        "discount": 20,
        "discount_type": "percentage",
        "valid_from": "2024-11-20",
        "valid_to": "2024-12-31",
        "usage_limit": 200
      },
      {
        "company_name": "Radiance Spa",
        "id": "COUPON002",
        "code": "SPARKLE50",
        "description": "Flat $50 off on spa treatments above $300.",
        "discount": 50,
        "discount_type": "fixed",
        "min_order_value": 300,
        "valid_from": "2024-11-01",
        "valid_to": "2024-12-31",
        "usage_limit": 100
      },
      {
        "company_name": "Beauty Bliss Boutique",
        "id": "COUPON003",
        "code": "FREESHIPBLISS",
        "description": "Free shipping on all orders above $100.",
        "discount": 0,
        "discount_type": "free_shipping",
        "min_order_value": 100,
        "valid_from": "2024-11-15",
        "valid_to": "2024-12-15",
        "usage_limit": 150
      },
      {
        "company_name": "Luxe Lashes Co.",
        "id": "COUPON004",
        "code": "LUXELASH",
        "description": "Buy 2 lash sets, get 1 free.",
        "discount": 100,
        "discount_type": "bogo",
        "valid_from": "2024-11-20",
        "valid_to": "2024-12-20",
        "usage_limit": 500
      },
      {
        "company_name": "Divine Skincare",
        "id": "COUPON005",
        "code": "SKINLOVE",
        "description": "30% off for new customers.",
        "discount": 30,
        "discount_type": "percentage",
        "valid_from": "2024-11-01",
        "valid_to": "2024-12-31",
        "usage_limit": 50,
        "eligibility": "new_users_only"
      },
      {
        "company_name": "Chic Nails Studio",
        "id": "COUPON006",
        "code": "NAILHOLIDAY",
        "description": "25% off on all nail services during the holiday season.",
        "discount": 25,
        "discount_type": "percentage",
        "valid_from": "2024-12-01",
        "valid_to": "2024-12-31",
        "usage_limit": 300
      },
      {
        "company_name": "Glow & Go",
        "id": "COUPON007",
        "code": "WEEKENDGLOW",
        "description": "10% off on weekend appointments.",
        "discount": 10,
        "discount_type": "percentage",
        "valid_from": "2024-11-23",
        "valid_to": "2024-12-31",
        "usage_limit": 100,
        "eligibility": "weekends_only"
      },
      {
        "company_name": "Velvet Vanity",
        "id": "COUPON008",
        "code": "VELVET20",
        "description": "20% off on velvet lipstick range.",
        "discount": 20,
        "discount_type": "percentage",
        "valid_from": "2024-11-10",
        "valid_to": "2024-12-31",
        "usage_limit": 200
      },
      {
        "company_name": "Royal Fragrances",
        "id": "COUPON009",
        "code": "PERFUME50",
        "description": "Flat $50 off on orders above $200.",
        "discount": 50,
        "discount_type": "fixed",
        "min_order_value": 200,
        "valid_from": "2024-11-01",
        "valid_to": "2024-11-30",
        "usage_limit": 75
      },
      {
        "company_name": "Elegance Haircare",
        "id": "COUPON010",
        "code": "HAIRLOVE15",
        "description": "15% off on all haircare products.",
        "discount": 15,
        "discount_type": "percentage",
        "valid_from": "2024-11-15",
        "valid_to": "2024-12-25",
        "usage_limit": 250
      }
    
    ]
    
  return (
    <main >

        <Nav/>
        <Routes>
          <Route path='/DashBoard' element={<DashBoard/>}  />
          <Route path='/Home' element={<Home/>}/>
        </Routes>
      
     
    </main>
  )
}

export default App
