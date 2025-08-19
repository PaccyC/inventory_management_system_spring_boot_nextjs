
"use client"
import React from 'react'

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

interface AddNewProductModalProps {
  onDiscard: () => void;
}
const AddNewProductModal = ({onDiscard}:AddNewProductModalProps) => {
   // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal content */}
      <div className="relative bg-white px-6 py-4 rounded-lg shadow-lg w-[400px]">
        <h4 className="text-lg font-semibold mb-3">New Product</h4>

         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className=' flex items-center gap-4'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className='focus:outline-0' placeholder="shadcn" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className=' flex items-center gap-4'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className='focus:outline-0' placeholder="shadcn" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className=' flex items-center gap-4'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className='focus:outline-0' placeholder="shadcn" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className=' flex items-center gap-4'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className='focus:outline-0' placeholder="shadcn" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className=' flex items-center gap-4'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className='focus:outline-0' placeholder="shadcn" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className=' flex items-center gap-4'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className='focus:outline-0' placeholder="shadcn" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full flex justify-end items-center gap-3'>

         <Button className='bg-transparent text-gray-900 border-[1px] border-gray-900 hover:bg-transparent cursor-pointer' onClick={onDiscard} type="button">Discard</Button>
        <Button  className='text-white text-sm font-medium cursor-pointer' type="submit">Submit</Button>
        </div>
      </form>
    </Form>
      </div>
    </div>
  )
}

export default AddNewProductModal
