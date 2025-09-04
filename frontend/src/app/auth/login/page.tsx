"use client";

import Image from 'next/image'
import React from 'react'
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
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
import {toast} from "react-hot-toast"

import { loginUser } from '@/utils/api/user';
import { useAppDispatch } from '@/hooks/hooks';
import {  login} from '@/redux/slices/user-slice'





const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
   password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})

const LoginPage = () => {
  const dispatch=useAppDispatch()

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
   
    try {
      
      const {token,user}= await loginUser(values.email,values.password);

     
      
      dispatch(login({token,user}))

      toast.success("Login successfull",{
        duration:1000,
        
      })
    } catch (error) {
      console.log("Error while logging in",error);
      
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
          <h3 className='font-semibold text-2xl md:text-3xl text-gray-900'>Log in to your account</h3>
          <p className='text-gray-500 text-sm'>Welcome back! Please enter your details.</p>
        </div>

        <div className='w-full flex flex-col gap-5'>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

        <div className='w-full flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
           <Checkbox />
           <p className='text-xs text-grey-700'>Remember for 30 days</p>
          </div> 
          <Link href="/auth/login">
           <p className='text-primary text-xs'>Forgot Password</p>
          </Link>
        </div>

        <Button 
        type="submit"
        className='bg-primary w-full rounded-sm text-white cursor-pointer'
        >Sign in</Button>

        <Button 
        type="submit"
        className=' bg-transparent hover:bg-transparent border-[1px] border-gray-900 w-full flex items-center justify-center gap-3 rounded-sm text-gray-900 cursor-pointer'
        >
          <img src="/icons/google.svg" alt="Google" className='' />
         <p className=''>Sign in with Google</p>
         </Button>
        

      </form>
    </Form>

     <p className='text-sm text-gray-500 text-center'>Don’t have an account? <Link href="/auth/register" className='text-primary font-semibold cursor-pointer'>Sign up</Link></p>

        </div>

        

      </div>
    
  )
}

export default LoginPage
