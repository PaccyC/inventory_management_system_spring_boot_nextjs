import Leftbar from '@/components/Leftbar'
import Navbar from '@/components/Navbar'
import React from 'react'

const CoreLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='w-full min-h-screen flex gap-0.5 bg-gray-300'>
      <Leftbar/>
      <section className='lg:w-[85%] h-full flex flex-col gap-6'>
        <Navbar/>
        {children}

      </section>
     
    </main>
  )
}

export default CoreLayout
