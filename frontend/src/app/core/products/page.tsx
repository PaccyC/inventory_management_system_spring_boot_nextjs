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


const InventoryPage = () => {
  return (
     <div className='w-full px-6 py-4 bg-transparent flex flex-col gap-4'>
      <div className='w-full bg-white rounded-lg px-4 py-4 flex flex-col gap-4'>
        <h3 className='text-2xl font-medium text-gray-900'>Overall Inventory</h3>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-6 '>
          <div className='flex flex-col gap-1 items-start'>
           <h4 className='text-lg text-[#1570EF] font-semibold'>Categories</h4>
           <p className='text-[#5D6679] text-sm font-medium'>14</p>
           <p className='text-xs font-normal text-[#858D9D]'>Last 7 days</p>
          </div>
          {/* Second Item */}
          <div className='flex flex-col gap-1 items-start'>
           <h4 className='text-lg text-[#E19133] font-semibold'>Total Products</h4>
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
           <h4 className='text-lg text-[#845EBC] font-semibold'>Top Selling</h4>
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
           <h4 className='text-lg text-[#F36960] font-semibold'>Low Stocks</h4>
           <div className='w-full grid grid-cols-2'>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-900 font-medium text-sm'>12</p>
              <p className='text-xs font-normal text-[#858D9D]'>Ordered</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-900 font-medium text-sm text-right'>2</p>
              <p className='text-xs font-normal text-[#858D9D] text-right'>Not in stock</p>
            </div>
           </div>
          </div>
           
        </div>

      </div>
      <div className='w-full bg-white rounded-lg px-4 py-4 flex flex-col gap-4'>
        <div className='w-full flex justify-between items-center'>
          <h3 className='text-2xl font-medium text-gray-900'>Products</h3>
          <div className=' flex gap-3 items-center'>
            <Button 
            type='button' 
            className='text-white bg-[#1366D9] px-4 py-2 cursor-pointer text-center'
            >Add Product
            </Button>
             <Button 
            type='button' 
            className='text-gray-900 bg-transparent hover:bg-gray-100 border-[1px] border-gray-900 px-4 py-2 cursor-pointer flex gap-1 items-center justify-center'
            >
              <img src="/icons/filter.svg"/>
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
                <TableHead className='text-[#667085]' >Buying Price</TableHead>
                <TableHead className='text-[#667085]'>Quantity</TableHead>
                <TableHead className='text-[#667085]'>Threshold Value</TableHead>
                <TableHead className='text-[#667085]'>Expiry Date</TableHead>
                <TableHead className='text-[#667085]'>Availability</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Surf Excel</TableCell>
                <TableCell className='text-grey-700'>30</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
                <TableCell className='text-grey-700'>20</TableCell>
                <TableCell className='text-grey-700'>$100</TableCell>
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

export default InventoryPage
