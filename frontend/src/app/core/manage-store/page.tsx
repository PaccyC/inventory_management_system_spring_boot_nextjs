import { Button } from '@/components/ui/button'
import React from 'react'
import { IoMdAdd } from "react-icons/io";

const stores=[
  {
    branch:"Singanallur Branch",
    storeName:"Lisy Store",
    location:"1A/Krihnarajapuram, 3 rd street sulur",
    anotherName:"Coimbatore - 6313403",
    phone:"044-653578"
  },
   {
    branch:"Singanallur Branch",
    storeName:"Lisy Store",
    location:"1A/Krihnarajapuram, 3 rd street sulur",
    anotherName:"Coimbatore - 6313403",
    phone:"044-653578"
  },
   {
    branch:"Singanallur Branch",
    storeName:"Lisy Store",
    location:"1A/Krihnarajapuram, 3 rd street sulur",
    anotherName:"Coimbatore - 6313403",
    phone:"044-653578"
  }
]

const ManageStore = () => {
  return (
    <div className=' w-full px-6 py-4 bg-transparent'>
      <div className='w-full px-3 py-3 bg-white rounded-lg shadow-md flex flex-col gap-3'>
        <div className='w-full flex items-center justify-between'>
          <h4 className='text-xl text-gray-900 font-medium'>Manage Store</h4>
          <Button className='text-white text-sm font-medium hidden md:flex'>Add Store</Button>
          <div className="px-2 py-2 rounded-full flex md:hidden bg-primary cursor-pointer">
            <IoMdAdd size={24} className=' cursor-pointer text-white'/>

          </div>
        </div>

        {/* Stores */}
        {
          stores.map((store,index)=>(
            <div 
            key={index}
            className='w-full bg-transparent border-[1px] border-[#F0F1F3] rounded-lg shadow-md grid grid-cols-3 gap-2 overflow-hidden'
            >
              <div className='col-span-1 flex items-center justify-center bg-[#F0F1F3]'>
                <h5 className='text-lg font-semibold'>{store.branch}</h5>
              </div>

              <div className='col-span-2 flex justify-between items-start px-2 py-2'>
                <div className='flex flex-col gap-1'>
                  <p className='font-semibold text-[16px]'>{store.storeName}</p>
                  <span className='text-[#858D9D] text-sm font-light'>{store.location}</span>
                  <span className='text-[#858D9D] text-sm font-light'>{store.anotherName}</span>
                  <span className='text-[#858D9D] text-sm font-light'>{store.phone}</span>
                </div>
                <Button 
                type='button'
                className='text-primary text-sm bg-transparent border-[2px] border-[#E8F1FD] rounded-md hover:bg-transparent cursor-pointer px-4 py-1'
                >Edit</Button>
              </div>
            </div>
          ))
        }

      </div>
      
    </div>
  )
}

export default ManageStore
