import { useQuery,useMutation } from '@tanstack/react-query'
import { createProduct } from '@/utils/api/product'
import { ICreateProduct } from '@/types'
import toast from 'react-hot-toast'


export const useCreateProductMutation= ()=>{

    return useMutation({
        mutationFn: (product:ICreateProduct)=>createProduct(product),
         
      onSuccess: () => {
        toast.success("Product created!");
      },
      onError: () => {
        toast.error("Failed to create product");
      },
    })
}