import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const AlternateContactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: '',
    country: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    interest: '',
    country: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '', interest: '', country: '' };

    // Basic validation example, you can customize as needed
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          setFormData({
            name: '',
            email: '',
            message: '',
            interest: '',
            country: '',
          });
          // alert('Your message has been sent!');
        //   toast.success("Message sent successfully");
        } else {
          // alert('There was an error sending your message. Please try again later.');
        //   toast.error('Error sending your message');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // alert('There was an error submitting the form. Please try again later.');
        // toast.error('Error sending your message');
      }
    }
  };

  return (
    <div className='lg:container mb-[100px] mx-5 z-10  lg:mx-auto shadow-xl pb-[50px]  bg-white'>

    
      <div className="lg:container mx-auto lg:pr-10 lg:pl-5 block lg:flex">
        
        <div data-aos="zoom-in" className="left w-full">
          <form onSubmit={handleSubmit}>
            <div className='px-5  my-5'>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`px-5 w-full border-black border rounded-br-xl py-2 md:py-5 rounded-tl-xl ${errors.name && 'border-red-500'}`}
                placeholder='Name'
                name="name"
                id=""
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div className='px-5  my-5'>
              <input
                type="text"
                value={formData.email}
                onChange={handleChange}
                className={`px-5 w-full border-black border rounded-br-xl py-2 md:py-5 rounded-tl-xl ${errors.email && 'border-red-500'}`}
                placeholder='Email'
                name="email"
                id=""
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className='px-5  my-5'>
              <input
                type="text"
                value={formData.country}
                onChange={handleChange}
                className={`px-5 w-full border-black border rounded-br-xl py-2 md:py-5 rounded-tl-xl ${errors.country && 'border-red-500'}`}
                placeholder='Address'
                name="country"
                id=""
              />
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>
            <div className='px-5  my-5'>
              <input
                type="text"
                value={formData.interest}
                onChange={handleChange}
                className={`px-5 w-full border-black border rounded-br-xl py-2 md:py-5 rounded-tl-xl ${errors.interest && 'border-red-500'}`}
                placeholder='I am interested in'
                name="interest"
                id=""
              />
              {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
            </div>
            <div className='px-5  my-5'>
              <textarea
                value={formData.message}
                onChange={handleChange}
                className={`px-5 w-full border-black border py-2 md:py-5 rounded-br-xl rounded-tl-xl ${errors.message && 'border-red-500'}`}
                name="message"
                id=""
                placeholder='Write us a message'
                cols="12"
                rows="3"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div className='px-5 my-5'>
              <button className='bg-[#17B687] py-5 text-white text-sm md:text-[20px] font-[600] px-10 w-full rounded-tl-xl rounded-br-xl'>Send Message</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default AlternateContactform;