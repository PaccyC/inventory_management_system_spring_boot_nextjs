"use client";

import Image from 'next/image'
import React, { useState } from 'react'


 
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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/utils/api/user';
 
const formSchema = z.object({
    names: z.string().min(4, {
    message: "name must be at least 4 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
   password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})

const RegisterPage = () => {

  const router = useRouter();
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      names: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
  setError(null);
  try {
    const result = await registerUser(values);
    if (result) {
      // Registration successful, redirect or show success
      router.push("/auth/login"); // or wherever you want
    } else {
      setError("Registration failed. Please try again.");
    }
  } catch (err) {
    setError("Registration failed. Please try again.");
  } finally {
    setLoading(false);
  }
  }

  return (
    <div className='h-full w-full flex flex-col gap-4 items-center justify-center'>
      
        <Image 
        src="/images/logo2.png" 
        alt='Logo here' 
        height={60} 
        width={60}
        className='object-contain mb-4'
        />

        <div className=' flex flex-col gap-1 text-center'>
          <h3 className='font-semibold text-2xl md:text-3xl text-gray-900'>Create an account</h3>
          <p className='text-gray-500 text-sm'>Start your 30-day free trial.</p>
        </div>

        <div className='w-full flex flex-col gap-5'>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
         <FormField
          control={form.control}
          name="names"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-gray-500 font-medium'>Name</FormLabel>
              <FormControl>
                <Input 
                placeholder="Name here" 
                {...field} 
                className='w-full  focus:border-none '
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-gray-500 font-medium'>Email</FormLabel>
              <FormControl>
                <Input 
                placeholder="Email here" 
                {...field} 
                className='w-full  focus:border-none '
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-gray-500 font-medium'>Password</FormLabel>
              <FormControl>
                <Input placeholder="....." {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />


        <Button 
        type="submit"
        className='bg-primary w-full rounded-sm text-white cursor-pointer'
        >Get started</Button>

        <Button 
        type="submit"
        className=' bg-transparent hover:bg-transparent border-[1px] border-gray-900 w-full flex items-center justify-center gap-3 rounded-sm text-gray-900 cursor-pointer'
        >
          <img src="/icons/google.svg" alt="Google" className='' />
         <p className=''>Sign up with Google</p>
         </Button>
        

      </form>
    </Form>

     <p className='text-sm text-gray-500 text-center'>Already have an account? <Link href="/auth/login" className='text-primary font-semibold cursor-pointer'>Log in</Link></p>

        </div>

        

      </div>
    
  )
}

export default RegisterPage
