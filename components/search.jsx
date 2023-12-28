import React from 'react'

const Search = () => {
  return (
    <div className='bg-white pt-[100px] flex px-10 md:px-0'>
        <div className="container py-[50px] flex flex-wrap gap-20 bg-white- mx-auto">
            <div>
                <input type="text" className='bg-gray-100 py-2 px-10 text-black outline-none' placeholder='Search for products' name="" id="" />
            </div>
            <div>
                <select className='py-2 px-10 text-black outline-none' name="" id="">
                    <option value="">Product Category</option>
                    <option value="">Buy Adderall Online</option>
                    <option value="">Buy Ocycodone Online</option>
                    <option value="">Buy Adipex Online</option>
               
                </select>
            </div>
        </div>
    </div>
  )
}

export default Search