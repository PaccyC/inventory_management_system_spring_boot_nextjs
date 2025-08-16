import Image from 'next/image'
import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='w-full h-screen bg-gray-100/40'>
       <div className='w-full h-full flex flex-1 gap-0'>

        <div className=' hidden  md:flex md:flex-1/2 h-full items-center justify-center px-6'>
        <Image src="/images/logo.png" alt='Logo here' height={150} width={150} />
        </div>
        <div className=' flex-1 md:flex-1/2 px-8 lg:px-20'>
      {children}
        </div>
       </div>
    </main>
  )
}

export default AuthLayout
