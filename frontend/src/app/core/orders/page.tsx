import { Button } from '@/components/ui/button'
import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const OrdersPage = () => {
  return (
     <div className='w-full px-6 py-4 bg-transparent flex flex-col gap-4'>
      <div className='w-full bg-white rounded-lg px-4 py-4 flex flex-col gap-4'>
        <h3 className='text-2xl font-medium text-gray-900'>Overall Orders</h3>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-6 '>
          <div className='flex flex-col gap-1 items-start'>
           <h4 className='text-lg text-[#1570EF] font-semibold'>Total Orders</h4>
           <p className='text-[#5D6679] text-sm font-medium'>37</p>
           <p className='text-xs font-normal text-[#858D9D]'>Last 7 days</p>
          </div>
          {/* Second Item */}
          <div className='flex flex-col gap-1 items-start'>
           <h4 className='text-lg text-[#E19133] font-semibold'>Total Received</h4>
           <div className='w-full grid grid-cols-2'>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-900 font-medium text-sm'>879</p>
              <p className='text-xs font-normal text-[#858D9D]'>Last 7 days</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-900 font-medium text-sm'>₹25000</p>
              <p className='text-xs font-normal text-[#858D9D]'>Revenue</p>
            </div>
           </div>
          </div>
          {/* Third Item */}
          <div className='flex flex-col gap-1 items-start'>
           <h4 className='text-lg text-[#845EBC] font-semibold'>Total Returned</h4>
           <div className='w-full grid grid-cols-2'>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-900 font-medium text-sm'>5</p>
              <p className='text-xs font-normal text-[#858D9D]'>Last 7 days</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-900 font-medium text-sm'>₹2500</p>
              <p className='text-xs font-normal text-[#858D9D]'>Cost</p>
            </div>
           </div>
          </div>
          {/* 4th item */}
          <div className='flex flex-col gap-1 items-start'>
           <h4 className='text-lg text-[#F36960] font-semibold'>On the way</h4>
           <div className='w-full grid grid-cols-2'>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-900 font-medium text-sm'>12</p>
              <p className='text-xs font-normal text-[#858D9D]'>Ordered</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-900 font-medium text-sm text-right'>₹ 2356</p>
              <p className='text-xs font-normal text-[#858D9D] text-right'>Cost</p>
            </div>
           </div>
          </div>
           
        </div>

      </div>
      <div className='w-full bg-white rounded-lg px-4 py-4 flex flex-col gap-4'>
        <div className='w-full flex justify-between items-center'>
          <h3 className='text-2xl font-medium text-gray-900'>Orders</h3>
          <div className=' hidden md:flex gap-3 items-center'>
            <Button 
            type='button' 
            className='text-white bg-[#1366D9] px-4 py-2 cursor-pointer text-center'
            >Add Order
            </Button>
             <Button 
            type='button' 
            className='text-gray-900 bg-transparent hover:bg-gray-100 border-[1px] border-gray-900 px-4 py-2 cursor-pointer flex gap-1 items-center justify-center'
            >
              <img src="/icons/filter.svg" alt='filter'/>
              <p>Filter</p>
            </Button>
             <Button 
            type='button' 
            className='text-gray-900 bg-transparent hover:bg-gray-100 border-[1px] border-gray-900 px-4 py-2 cursor-pointer'
            >Download all
            </Button>
          </div>

        </div>
         <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-[#667085]'>Products</TableHead>
                <TableHead className='text-[#667085]' >Order Value</TableHead>
                <TableHead className='text-[#667085]'>Quantity</TableHead>
                <TableHead className='text-[#667085]'>Order ID</TableHead>
                <TableHead className='text-[#667085]'>Expected Delivery</TableHead>
                <TableHead className='text-[#667085]'>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Maggi</TableCell>
                <TableCell className='text-grey-700'>₹4306</TableCell>
                <TableCell className='text-grey-700'>43 Packets</TableCell>
                <TableCell className='text-grey-700'>7535</TableCell>
                <TableCell className='text-grey-700'>11/12/22</TableCell>
                <TableCell className='text-grey-700'>Delayed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Maggi</TableCell>
                <TableCell className='text-grey-700'>₹4306</TableCell>
                <TableCell className='text-grey-700'>43 Packets</TableCell>
                <TableCell className='text-grey-700'>7535</TableCell>
                <TableCell className='text-grey-700'>11/12/22</TableCell>
                <TableCell className='text-grey-700'>Delayed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Maggi</TableCell>
                <TableCell className='text-grey-700'>₹4306</TableCell>
                <TableCell className='text-grey-700'>43 Packets</TableCell>
                <TableCell className='text-grey-700'>7535</TableCell>
                <TableCell className='text-grey-700'>11/12/22</TableCell>
                <TableCell className='text-grey-700'>Delayed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Maggi</TableCell>
                <TableCell className='text-grey-700'>₹4306</TableCell>
                <TableCell className='text-grey-700'>43 Packets</TableCell>
                <TableCell className='text-grey-700'>7535</TableCell>
                <TableCell className='text-grey-700'>11/12/22</TableCell>
                <TableCell className='text-grey-700'>Delayed</TableCell>
              </TableRow>
             
              
             
            </TableBody>
          </Table>
          <div className='w-full flex items-center justify-between'>
           <Button 
            type='button' 
            className='text-gray-900 bg-transparent hover:bg-gray-100 border-[1px] border-gray-900 px-4 py-2 cursor-pointer'
            >Previous
            </Button>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <Button 
            type='button' 
            className='text-gray-900 bg-transparent hover:bg-gray-100 border-[1px] border-gray-900 px-4 py-2 cursor-pointer'
            >Next
            </Button>
          </div>
        </div>
     </div>
  )
}

export default OrdersPage
