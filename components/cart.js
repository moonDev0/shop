// components/FloatingCart.js
import React from 'react';
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';
import useCartStore from '@/store/cartStore';

const FloatingCart = () => {
  const { cart } = useCartStore();

  return (
    <Link href="/cart">
      <button className="right-4 mr-2 bg-white p-2 text-red-700  rounded-full flex items-center justify-center">
        <MdShoppingCart size={24} />
        {cart.length > 0 && <span className="ml-1">{cart.length}</span>}
      </button>

    </Link>
  );
};

export default FloatingCart;
