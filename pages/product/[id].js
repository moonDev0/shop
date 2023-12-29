import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useRouter } from 'next/router';
import { Product } from '@/components/products/list';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import useCartStore from '@/store/cartStore';
import FloatingCart from '@/components/cart';

const ProductView = () => {
  const { addToCart } = useCartStore();
  const router = useRouter();
  const { id } = router.query;
  const item = Product.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Not found</div>;
  }

  const handleAddToCart = (subItem) => {
    const cartItem = {
      name: subItem.name,
      price: subItem.price,
    };
    addToCart(cartItem);
    // You can implement additional logic here, such as updating the cart in local storage or making an API call.
  };

  return (
    <div className=''>
      <div>
        <Navbar />
      </div>

      <div className='container px-5 md:px-0 mx-auto py-40'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {item.subItems.map((subItem, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${subItem.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className="p-4 rounded"
            >
              <h2 className='bg-white pl-2'>{subItem.name}</h2>
              <p className='bg-white text-red-700 pl-2'>$ {subItem.price}</p>
              <button
                onClick={() => handleAddToCart(subItem)}
                className="mt-4 bg-blue-500 bg-white text-blue-700 p-2 rounded"
              >
                <MdAddShoppingCart size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductView;
