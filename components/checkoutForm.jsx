import React, { useState } from 'react';
import axios from 'axios';
import useCartStore from '@/store/cartStore';

const CheckoutForm = () => {
  const { cart } = useCartStore();

  const [formData, setFormData] = useState({
    email: '',
    address: '',
    image: null,
    name: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const fileValue = type === 'file' ? e.target.files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fileValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (cart.length === 0) {
        console.error('Cart is empty. Add items before submitting.');
        return;
      }

      const formDataWithFile = new FormData();
      formDataWithFile.append('image', formData.image);
      formDataWithFile.append('email', formData.email);
      formDataWithFile.append('address', formData.address);
      formDataWithFile.append('name', formData.name);
      formDataWithFile.append('amount', formData.amount);

      const response = await axios.post('YOUR_API_ENDPOINT', formDataWithFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-[14px] font-bold mb-4">Submit your payment details below</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image Upload:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            accept="image/*"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
          {cart.length === 0 ? (
            <p className="text-red-500">Your cart is empty. Add items before submitting.</p>
          ) : (
            <div>
              <ul>
                {cart.map((item, id) => (
                  <li key={id}>{item.name}</li>
                ))}
              </ul>
              <p className="font-bold mt-2">Total: $ {cart.reduce((acc, item) => acc + 50 + parseFloat(item.price), 0).toFixed(2)}</p>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cart Summary:</label>
          <textarea
            name="message"
            value={cart.map((item) => `${item.name} $${item.price}`).join('\n')}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="bg-secondary text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
