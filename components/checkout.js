import Image from 'next/image'
import React, { useState } from 'react'
import Wallet from '../public/assets/barcode.jpeg'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CheckoutForm from './checkoutForm';


const Checkout = () => {
  const walletAddress = 'bc1qj7m37k3jejnxrncg6kmd4p40aelgcdmfu6kgg2';

  const handleCopyClick = () => {
    setIsCopied(true);
    // You can implement additional logic here, such as showing a success message.
  };


const [isCopied, setIsCopied] = useState(false);


  return (
    <div>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h1 className=''>Instruction</h1>
          <p className=' text-[14px]'>Kindly deposit the bill to the Bitcoin wallet below. <br /> 
              Submit proof of payment and an agent will respond to you upon review. <br />
              Thank you. <br />
              Note: A shipping fee of $50 will be charged 
          </p>

          <div className=' flex justify-center flex-wrap'>


          <div className='mt-4  mr-4'>
            <Image src={Wallet} alt='crypto' className=' w-[200px]'/>
          </div>


          <div className=' mt-10 '>
          <div>
            <p>Your Wallet Address:</p>
          <div className="md:flex mt-10 items-center">
            <span className="bg-gray-200 text-[14px] md:text-[16px] p-2 rounded">{walletAddress}</span>
            <CopyToClipboard text={walletAddress} onCopy={handleCopyClick}>
            <div>
          
              <button className="ml-2 mt-4 md:mt-0 text-[14px] md:text-[16px] bg-secondary text-white p-2 rounded"> 
              {isCopied ? 'Copied!' : 'Copy'}
            </button>
            </div>
            </CopyToClipboard>
          </div>
          
          </div>
          </div>
          
          </div>


        </div>

        <div>
          <CheckoutForm/>
        </div>
      </div>
    </div>
  )
}

export default Checkout