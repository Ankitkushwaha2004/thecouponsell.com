

import React, { useState } from 'react'

const ProductPage = () => {


    const [images, setImages] = useState({
        img : "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    })

    const [activeImg, setActiveImage] = useState(images.img)

    const [amount, setAmount] = useState(1);


    return (
        <div className='item-container flex justify-center '>
            <div className='item flex max-w-full h-full rounded-xl justify-between lg:flex-row gap-16 lg:items-center sm:flex-col'>

            <div className='item-img flex gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='aspect-square object-cover max-w-80 rounded-xl'/>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className='catagory font-semibold'>catagory{}</span>
                    <h1 className='product-name text-3xl font-bold'>Product name{}</h1>
                </div>
                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, 
                </p>
                <div className='action-btn flex flex-col gap-2'>
                <h6 className='text-2xl font-semibold'>$Price{}</h6>
                    <div className=' flex gap-4'>
                        <button className='buy-btn px-6 py-1 rounded-lg'>BUY</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductPage