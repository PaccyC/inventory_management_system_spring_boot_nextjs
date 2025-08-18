import OrderChart from '@/components/OrderChart'
import SalesAndPurchaseChart from '@/components/SalesAndPurchaseChart'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const lowQuantityProducts =[
  {
    name:"Tata Salt",
    amountRemaining:15,
    image: "/images/tata-salt.png",
  },
  {
    name:"Lays",
    amountRemaining:10,
    image: "/images/lays.png",
  },
  {
    name:"Lays",
    amountRemaining:10,
    image: "/images/lays.png",
  }
]



const Dashboard = () => {
  return (
    <div className='w-full px-6 py-4 bg-transparent flex flex-col gap-4'>

      <div className='w-full flex flex-col  md:grid gap-4  grid-cols-3'>
        <div className="md:col-span-2 bg-white rounded-lg shadow-md px-4 py-4 flex flex-col gap-4">
  <h3 className="text-xl font-medium text-grey-800">Sales Overview</h3>

  <div className=" grid grid-cols-2  gap-6 md:flex items-center justify-between">
    
    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#629FF4]/30 h-8 w-8 p-1 rounded-md flex items-center justify-center">
        <img src="/icons/sales.svg" alt="sales icon" />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-gray-800">$843</span>
        <span className="text-sm text-gray-500">Sales</span>
      </div>
    </div>
     <div className='h-full hidden md:flex w-[1px] bg-[#F0F1F3]'/>

    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#629FF4]/30 h-8 w-8 p-1 rounded-md flex items-center justify-center">
        <img src="/icons/revenue.svg" alt="revenue icon" />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-gray-800">$18,300</span>
        <span className="text-sm text-gray-500">Revenue</span>
      </div>
    </div>
     <div className='h-full hidden md:flex w-[1px] bg-[#F0F1F3]'/>

    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#629FF4]/30 h-8 w-8 p-1 rounded-md flex items-center justify-center">
        <img src="/icons/profit.svg" alt="profit icon" />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-gray-800">$666</span>
        <span className="text-sm text-gray-500">Profit</span>
      </div>
    </div>
     <div className='h-full hidden md:flex w-[1px] bg-[#F0F1F3]'/>

    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#629FF4]/30 h-8 w-8 p-1 rounded-md flex items-center justify-center">
        <img src="/icons/cost.svg" alt="cost icon" />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-gray-800">$17,432</span>
        <span className="text-sm text-gray-500">Cost</span>
      </div>
    </div>
  </div>
</div>

        <div className='md:col-span-1 bg-white rounded-lg shadow-md px-6 py-4 flex flex-col gap-4'>
          <h3 className='text-xl font-medium text-grey-800'>Inventory Summary</h3>
          <div className='w-full flex justify-between items-center'>

            <div className='flex flex-col items-center'>
              <div className='bg-[#629FF4]/30 h-6 w-6 p-0.5 rounded-xs'>
                <img src="/icons/quantity.svg" className='' alt='sales icons'/>
              </div>
              <p>878</p>
              <p>Quantity in Hand</p>

            </div>
            <div className='h-full w-[1px] bg-[#F0F1F3]'/>
            <div className='flex flex-col items-center'>
              <div className='bg-[#629FF4]/30 h-6 w-6 p-0.5 rounded-xs'>
                <img src="/icons/to-reveive.svg" className='h-full object-contain' alt='sales icons'/>
              
              </div>
              <p>878</p>
              <p>To be received</p>

            </div>
            
          </div>

        </div>
       
      </div>

      {/*   Second row */}
       <div className='w-full flex flex-col  md:grid gap-4  grid-cols-3'>
        <div className='md:col-span-2 bg-white rounded-lg shadow-md px-4 py-4 flex flex-col justify-between'>
          <h3 className='text-xl font-medium text-grey-800'>Purchase Overview</h3>
          <div className='w-full md:flex items-center justify-between grid grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='flex flex-col gap-3 items-center'>
              <div className='bg-[#629FF4]/30 h-6 w-6 p-0.5 rounded-xs'>
                <img src="/icons/purchase-bag.svg" className='h-full object-contain' alt='sales icons'/>
              
              </div>
              <div className=' flex gap-4 items-center'>
                <span>82</span>
                <span>Purchase</span>
              </div>
            </div>

            <div className='h-full hidden md:flex w-[1px] bg-[#F0F1F3]'/>

             <div className='flex flex-col gap-3 items-center'>
              <div className='bg-[#629FF4]/30 h-6 w-6 p-0.5 rounded-xs'>
                <img src="/icons/sales.svg" className='h-full object-contain' alt='sales icons'/>
              
              </div>
              <div className=' flex gap-4 items-center'>
                <span>$13,756</span>
                <span>Cost</span>
              </div>
            </div>
            <div className='h-full hidden md:flex w-[1px] bg-[#F0F1F3]'/>
            <div className='flex flex-col gap-3 items-center'>
              <div className='bg-[#629FF4]/30 h-6 w-6 p-0.5 rounded-xs'>
                <img src="/icons/cancel.svg" className='h-full object-contain' alt='cancel icons'/>
              
              </div>
              <div className=' flex gap-4 items-center'>
                <span>5</span>
                <span>Cancel</span>
              </div>
            </div>
            <div className='h-full hidden md:flex w-[1px] bg-[#F0F1F3]'/>
            <div className='flex flex-col gap-3 items-center'>
              <div className='bg-[#629FF4]/30 h-6 w-6 p-0.5 rounded-xs'>
                <img src="/icons/sales.svg" className='h-full object-contain' alt='sales icons'/>
              
              </div>
              <div className=' flex gap-4 items-center'>
                <span>$17,987</span>
                <span>Return</span>
              </div>
            </div>

          </div>


        </div>
        <div className='md:col-span-1 bg-white rounded-lg shadow-md px-6 py-4 flex flex-col gap-4'>
          <h3 className='text-xl font-medium text-grey-800'>Product Summary</h3>
          <div className='w-full flex justify-between items-center'>

            <div className='flex flex-col items-center'>
              <div className='bg-[#629FF4]/30 h-6 w-6 p-0.5 rounded-xs'>
                <img src="/icons/supplier.svg" className='h-full object-contain' alt='sales icons'/>
              
              </div>
              <p>31</p>
              <p className='text-center'>Number of Suppliers</p>

            </div>
            <div className='h-full w-[1px] bg-[#F0F1F3]'/>
            <div className='flex flex-col items-center'>
              <div className='bg-[#629FF4]/30 h-6 w-6 p-0.5 rounded-xs'>
                <img src="/icons/categories.svg" className='h-full object-contain' alt='sales icons'/>
              
              </div>
              <p>21</p>
              <p className='text-center'>Number of Categories</p>

            </div>
            
          </div>

        </div>
       
      </div>

      {/* Third row */}
       <div className='w-full flex flex-col  md:grid gap-4  grid-cols-3'>
        <div className='md:col-span-2 bg-white rounded-lg shadow-md px-4 py-4 flex flex-col gap-4'>
          <div className='w-full flex items-center justify-between'>
            <h3 className='text-xl font-medium text-grey-800'>Sales & Purchase</h3>
            <div className='w-[90px] h-[30px] bg-transparent  border-[1px] border-gray-900 px-2 py-2 rounded-sm cursor-pointer flex items-center justify-between'>
              <img src="/icons/calendar.svg" className='h-full object-contain' alt="" />
              <p className='text-[#5D6679] text-sm'>Weekly</p>
            </div>

          </div>

          <SalesAndPurchaseChart/>

        </div>
        <div className='md:col-span-1 bg-white rounded-lg shadow-md px-4 py-4 flex flex-col gap-4'>
          <h3 className='text-xl font-medium text-grey-800'>Order Summary</h3>
          <OrderChart/>

        </div>
       
      </div>
      {/* Fourth row */}
       <div className='w-full flex flex-col  md:grid gap-4  grid-cols-3'>
        <div className='md:col-span-2 bg-white rounded-lg shadow-md px-4 py-4 flex flex-col gap-4'>
          <div className='w-full flex flex-row items-center justify-between'>
              <h3 className='text-xl font-medium text-grey-800'>Top Selling Stock</h3>
              <Link 
              href="/core/products"
              className='text-[#0F50AA] text-sm font-normal'
              >See All
              
              </Link>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead >Name</TableHead>
                <TableHead>Sold Quantity</TableHead>
                <TableHead>Remaining Quantity</TableHead>
                <TableHead >Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Surf Excel</TableCell>
                <TableCell>30</TableCell>
                <TableCell>20</TableCell>
                <TableCell>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Surf Excel</TableCell>
                <TableCell>30</TableCell>
                <TableCell>20</TableCell>
                <TableCell>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Surf Excel</TableCell>
                <TableCell>30</TableCell>
                <TableCell>20</TableCell>
                <TableCell>$100</TableCell>
              </TableRow>
            </TableBody>
          </Table>

           {/* <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination> */}

        </div>
        <div className='md:col-span-1 bg-white rounded-lg shadow-md px-4 py-4 flex flex-col gap-4'>
          <div className='w-full flex flex-row items-center justify-between'>
              <h3 className='text-xl font-medium text-grey-800'>Low Quantity Stock</h3>
              <Link 
              href="/core/products"
              className='text-[#0F50AA] text-sm font-normal'
              >See All
              
              </Link>
          </div>
           {/* Products */}

           <div className='w-full flex flex-col gap-3'>
            {lowQuantityProducts.map((product,index)=>(
              <div 
              key={index}
              className='w-full flex justify-between items-center'
              >
                <img src={product.image} alt={product.name} />
                <div className='flex gap-2 items-center'>
                  <div className='block'>
                    <p className=' text-lg font-semibold text-gray-900'>{product.name}</p>
                    <span className='text-xs text-gray-500'>Remaining Quantity: {product.amountRemaining} Packet</span>
                  </div>

                  <div className='px-3 py-1  bg-[#FEECEB] rounded-md flex items-center justify-center'>
                    <span className=' text-xs font-medium text-[#AA3028] text-center'>Low</span>
                  </div>

                </div>
              </div>
            ))}
           </div>




        </div>
       
      </div>
    </div>
  )
}

export default Dashboard
