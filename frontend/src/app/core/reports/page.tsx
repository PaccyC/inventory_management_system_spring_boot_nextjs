import Link from 'next/link'
import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SalesAndPurchaseReportChart from '@/components/SalesAndPurchaseReportChart'

const bestSellingCategories= [
  {
    name:"Vegetable",
    turnOver:26000,
    increasedBy:3.2

  },
  {
    name:"Instant Food",
    turnOver:22000,
    increasedBy:2

  },
  {
    name:"Households",
    turnOver:26000,
    increasedBy:1.5

  }
]

const ReportsPage = () => {
  return (
    <div className='w-full px-6 py-4 bg-transparent flex flex-col gap-4'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='w-full rounded-lg bg-white shadow-md py-3 px-0 flex flex-col gap-3 md:justify-between'>
          <div className='px-3'>
          <h3 className='text-2xl font-medium text-gray-900'>Overview</h3>
          </div>

          <div className='w-full flex flex-col gap-2'>
            <div className='w-full px-3 grid grid-cols-3 items-start'>
              <div className=' flex flex-col gap-1'>
                <p className='text-[#5D6679] text-sm font-medium'>₹21,190</p>
                <span className='text-[#555555] text-xs font-light'>Total Profit</span>
              </div>
              <div className=' flex flex-col gap-1 text-center'>
                <p className='text-[#5D6679] text-sm font-medium'>₹18,300</p>
                <span className='text-[#DBA362] text-xs font-light'>Revenue</span>
              </div>
              <div className=' flex flex-col gap-1 text-center'>
                <p className='text-[#5D6679] text-sm font-medium'>₹17,432</p>
                <span className='text-[#845EBC] text-xs font-light'>Sales</span>
              </div>
            </div>
            {/* Horizontal line */}
             <div className='bg-[#F0F1F3] w-full h-[1px]'/>

             <div className='w-full px-3 grid grid-cols-4 items-start'>
              <div className=' flex flex-col gap-1'>
                <p className='text-[#5D6679] text-sm font-medium'>₹1,17,432</p>
                <span className='text-[#555555] text-xs font-light'>Net purchase value</span>
              </div>
              <div className=' flex flex-col gap-1 text-center'>
                <p className='text-[#5D6679] text-sm font-medium'>₹80,432</p>
                <span className='text-[#DBA362] text-xs font-light'>Net sales value</span>
              </div>
              <div className=' flex flex-col gap-1 text-center'>
                <p className='text-[#5D6679] text-sm font-medium'>₹30,432</p>
                <span className='text-[#845EBC] text-xs font-light'>MoM Profit</span>
              </div>
              <div className=' flex flex-col gap-1 text-center'>
                <p className='text-[#5D6679] text-sm font-medium'>₹10,432</p>
                <span className='text-[#845EBC] text-xs font-light'>YoY Profit</span>
              </div>
            </div>
          </div>

        </div>
         <div className='w-full rounded-lg bg-white shadow-md py-3 px-0 flex flex-col gap-3'>
          <div className='px-3 flex items-center justify-between'>
          <h3 className='text-2xl font-medium text-gray-900'>Best selling category</h3>
           <Link href="/core/products" className='text-[#0F50AA] text-sm font-normal'>See All</Link>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-[#667085]'>Category</TableHead>
                <TableHead className='text-[#667085]' >Turn Over</TableHead>
                <TableHead className='text-[#667085]'>Increased By</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              {bestSellingCategories.map((category,index)=>(
              <TableRow key={index}>
                <TableCell className="font-medium text-xs text-grey-700">{category.name}</TableCell>
                <TableCell className='text-grey-700 text-xs'>₹{category.turnOver}</TableCell>
                <TableCell className='text-[#10A760] text-xs'>{category.increasedBy}%</TableCell>
              </TableRow>

              ))}
              
              </TableBody>
              </Table>
        </div>
      </div>

      <div className='w-full bg-white rounded-lg shadow-md px-3 py-3 flex flex-col gap-4'>
        <div className='w-full flex items-center justify-between'>
          <h3 className='text-2xl font-medium text-gray-900'>Profit & Revenue</h3>
           <div className='w-[90px] h-[30px] bg-transparent  border-[1px] border-gray-900 px-2 py-2 rounded-sm cursor-pointer flex items-center justify-between'>
              <img src="/icons/calendar.svg" className='h-full object-contain' alt="" />
              <p className='text-[#5D6679] text-sm'>Weekly</p>
            </div>

        </div>
        <SalesAndPurchaseReportChart />

      </div>

      <div className='w-full rounded-lg bg-white shadow-md py-3 px-0 flex flex-col gap-3'>
          <div className='px-3 flex items-center justify-between'>
          <h3 className='text-2xl font-medium text-gray-900'>Best selling product</h3>
           <Link href="/core/products" className='text-[#0F50AA] text-sm font-normal'>See All</Link>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-[#667085]'>Product</TableHead>
                <TableHead className='text-[#667085]' >Product ID</TableHead>
                <TableHead className='text-[#667085]'>Category</TableHead>
                <TableHead className='text-[#667085]'>Remaining Quantity</TableHead>
                <TableHead className='text-[#667085]' >Turn Over</TableHead>
                <TableHead className='text-[#667085]'>Increased By</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              
              <TableRow>
                <TableCell className="font-medium text-xs text-grey-700">Tomato</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">738329</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">Vegetable</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">255 kg</TableCell>
                <TableCell className='text-grey-700 text-xs'>₹17,000</TableCell>
                <TableCell className='text-[#10A760] text-xs'>2.3%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-xs text-grey-700">Tomato</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">738329</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">Vegetable</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">255 kg</TableCell>
                <TableCell className='text-grey-700 text-xs'>₹17,000</TableCell>
                <TableCell className='text-[#10A760] text-xs'>2.3%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-xs text-grey-700">Tomato</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">738329</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">Vegetable</TableCell>
                <TableCell className="font-medium text-xs text-grey-700">255 kg</TableCell>
                <TableCell className='text-grey-700 text-xs'>₹17,000</TableCell>
                <TableCell className='text-[#10A760] text-xs'>2.3%</TableCell>
              </TableRow>



              
              </TableBody>
              </Table>
        </div>
      
    </div>
  )
}

export default ReportsPage
