"use client";

import Leftbar from '@/components/Leftbar'
import Navbar from '@/components/Navbar'
import React, { useState, useRef, useEffect } from 'react'

const CoreLayout = ({children}:{children:React.ReactNode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
 const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        sidebarOpen
      ) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [sidebarOpen])

  return (
    <main className="w-full min-h-screen flex gap-0.5 bg-gray-300 relative overflow-hidden">

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

     
      <div
        ref={sidebarRef}
        className={`fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 
          w-64 lg:w-[15%] h-screen 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          bg-white shadow-md rounded-r-md`}
      >
        <Leftbar onCloseSidebar={() => setSidebarOpen(false)} />
      </div>
      <section className="w-full lg:w-[85%] h-screen flex flex-col">
        <div className='sticky top-0 z-30'>
          <Navbar onClickSidebar={toggleSidebar} />

        </div>
        <div className='flex-1 overflow-y-auto'>
          {children}

        </div>
      </section>
    </main>
  )
}

export default CoreLayout
