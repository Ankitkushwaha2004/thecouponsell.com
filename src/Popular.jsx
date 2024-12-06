import React from 'react'
import Card from './assets/components/Card'

const Popular = () => {

const pop = [
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
        "vali_tdo": "2024-12-15",
        "usage_limit": 150
      },
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
        "vali_tdo": "2024-12-15",
        "usage_limit": 150
      }
]
  return (
    <div className='popular '>
        <h1 className='text-2xl'>Popular  </h1>
        <div className='flex gap-4   flex-wrap  rounded-xl'>
            {
                pop.map(function(elem,id){
                    return <Card  key={id} company={elem.company_name} Carddiscount={elem.discount} description={elem.description} valid_to={elem.valid_to} />
                })
            }
        </div>
    </div>
  )
}

export default Popular
