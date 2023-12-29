import Checkout from '@/components/checkout'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Cart = () => {
  return (
    <div className=''>
        <div>
            <Navbar/>
        </div>

        <div className=' px-5 md:px-0 py-40 text-black'>
            <Checkout/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Cart