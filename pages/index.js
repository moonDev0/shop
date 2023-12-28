import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Search from '@/components/search'
import Products from '@/components/products/product'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white'>
          <div className="header">
            <Navbar/>
            <Search/>
          </div>

          <div>
            <Products/>
          </div>
          
          <div>
            <Footer/>
          </div>

    </div>
  )
}
