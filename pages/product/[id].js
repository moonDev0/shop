import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Product } from '@/components/products/list';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ProductView = () => {
    // useScrollToTop();
  const router = useRouter();
  const { id } = router.query;
  const item = Product.find((item) => item.id === parseInt(id));
  if (!item) {
    return <div>not found</div>;
  }

  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default ProductView