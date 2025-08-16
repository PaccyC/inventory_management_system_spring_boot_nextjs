"use client";

import Image from 'next/image'
import React, { useState } from 'react'


const links= [
  {
    name: "Dashboard",
    icon: "/icons/dashboard.svg",
    route: "/core/dashboard"
  },
  {
    name: "Inventory",
    icon: "/icons/inventory.svg",
    route: "/core/products"
  },
  {
    name: "Reposrts",
    icon: "/icons/report.svg",
    route: "/core/reports"
  },
  {
    name: "Supploers",
    icon: "/icons/suppliers.svg",
    route: "/core/suppliers"
  },
  {
    name: "Orders",
    icon: "/icons/order.svg",
    route: "/core/orders"
  },
  {
    name: "Manage Store",
    icon: "/icons/manage-store.svg",
    route: "/core/manage-store"
  }
]
const Leftbar = () => {
  const [isActive,setIsActive]=useState("Dashboard")
  return (
    <div className='lg:w-[15%] min-h-screen bg-gray-100 rounded-r-md shadow-md flex flex-col justify-between px-6 py-4'>
      <div className='flex flex-col gap-8'>
        <Image 
        src="/images/top-logo.png"
         alt='Topo logo here'
         height={100}
         width={300}
         />

         <div className='flex flex-col space-y-6'>
          {links.map((link) => (
            <div 
              key={link.name} 
              className={`flex items-center gap-4 cursor-pointer ${isActive === link.name ? 'text-blue-600' : 'text-gray-700'}`}
              onClick={() => setIsActive(link.name)}
            >
              <Image src={link.icon} alt={`${link.name} icon`} height={24} width={24} />
              <span>{link.name}</span>
            </div>
          ))}
         </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4 cursor-pointer'>
          <Image src="/icons/settings.svg" alt='Settings icon' height={24} width={24} />
          <span>Settings</span>
        </div>
        <div className='flex items-center gap-4 cursor-pointer'>
          <Image src="/icons/logout.svg" alt='Logout icon' height={24} width={24} />
          <span>Logout</span>
        </div>
      </div>
      
    </div>
  )
}

export default Leftbar
