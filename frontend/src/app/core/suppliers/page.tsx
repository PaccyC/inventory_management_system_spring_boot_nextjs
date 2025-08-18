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
import { Button } from '@/components/ui/button'

const SupplierPage = () => {
  return (
    <div className='w-full px-6 py-4 bg-transparent flex flex-col gap-4'>
       <div className='w-full bg-white rounded-lg px-4 py-4 flex flex-col gap-4'>
        <div className='w-full flex justify-between items-center'>
          <h3 className='text-2xl font-medium text-gray-900'>Suppliers</h3>
          <div className='hidden md:flex gap-3 items-center'>
            <Button 
            type='button' 
            className='text-white bg-[#1366D9] px-4 py-2 cursor-pointer text-center'
            >Add Supplier
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
                <TableHead className='text-[#667085]'>Supplier Name</TableHead>
                <TableHead className='text-[#667085]' >Product</TableHead>
                <TableHead className='text-[#667085]'>Contact Number</TableHead>
                <TableHead className='text-[#667085]'>Email</TableHead>
                <TableHead className='text-[#667085]'>Type</TableHead>
                <TableHead className='text-[#667085]'>On the way</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Richard Martin</TableCell>
                <TableCell className='text-grey-700'>Kit Kat</TableCell>
                <TableCell className='text-grey-700'>7687764556</TableCell>
                <TableCell className='text-grey-700'>richard@gmail.com</TableCell>
                <TableCell className={`text-[#10A760]`}>Taking Return</TableCell>
                <TableCell className='text-grey-700'>13</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Richard Martin</TableCell>
                <TableCell className='text-grey-700'>Kit Kat</TableCell>
                <TableCell className='text-grey-700'>7687764556</TableCell>
                <TableCell className='text-grey-700'>richard@gmail.com</TableCell>
                <TableCell className={`text-[#DA3E33]`}>Not Taking Return</TableCell>
                <TableCell className='text-grey-700'>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-grey-700">Richard Martin</TableCell>
                <TableCell className='text-grey-700'>Kit Kat</TableCell>
                <TableCell className='text-grey-700'>7687764556</TableCell>
                <TableCell className='text-grey-700'>richard@gmail.com</TableCell>
                <TableCell className={`text-[#10A760]`}>Taking Return</TableCell>
                <TableCell className='text-grey-700'>13</TableCell>
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

export default SupplierPage
