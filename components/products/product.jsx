import React from 'react';
import { Product as ProductList } from './list';
import Link from 'next/link';
import { WiDirectionRight } from "react-icons/wi";

const Products = () => {
  return (
    <div>
      <div className="container grid gap-8 grid-cols-1 md:grid-cols-2 px-5 md:px-0 lg:grid-cols-3 justify-items-center mx-auto">
        {ProductList.map((item, id) => (
          <div
            key={id}
            className="w-full h-[220px] flex items-center justify-center mb-10"
            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
          <div> 
            <div className=''>
            <p className=' text-white text-[16px] bg-secondary py-1 px-1 font-bold mb-2 ml'>Buy {item.name} Online</p>
                <Link href={`/product/${item.id}`} className='bg-white px-4 py-1 flex items-center text-[14px]'>Shop Now  <i className='ml-2 text-[30px]'><WiDirectionRight/></i></Link>
            </div>
         
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Products;