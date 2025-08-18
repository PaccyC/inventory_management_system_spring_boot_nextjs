"use client";


import { HiOutlineMenu } from "react-icons/hi";

interface NavbarProps {
  onClickSidebar: () => void;
}
const Navbar = ({onClickSidebar}:NavbarProps) => {

  return (
    <nav className='w-full h-[70px] bg-white flex items-center justify-between px-6 shadow-md  '>
      <div className='h-[30px] w-[200px] lg:w-[300px] bg-transparent border-[1.5px] border-gray-900 flex items-center rounded-md py-2 px-2'>
        <img src="/icons/search.svg" />
        <input 
          type="text" 
          placeholder='Search product, supplier, order' 
          className='w-full bg-transparent outline-none text-gray-500 text-sm pl-2  placeholder:text-sm'/>

      </div>
      <div className='hidden md:flex flex-row  gap-3 items-center'>
        <img src="/icons/bell.svg" className='cursor-pointer' />
        <img src="/images/profile.png" className='cursor-pointer w-6 h-6 rounded-full' />

      </div>
      <div className='flex md:hidden items-center '>

      <HiOutlineMenu onClick={onClickSidebar} className='cursor-pointer text-lg'/>
      </div>

      



    </nav>
  )
}

export default Navbar
