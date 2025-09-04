"use client"
import React, { useCallback, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useDropzone } from "react-dropzone"
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
import { useCreateProductMutation } from "@/react-query/queriesAndMutations" // Adjust import path as needed

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z.string().min(4, {
    message: "Description has to be atleast 4 characters"
  }),
  unitPrice: z.number().nonnegative(),
  quantity: z.number().nonnegative(),
  mfgDate: z.string().min(1, { message: "Manufacturing date is required" }),
  expDate: z.string().min(1, { message: "Expiry date is required" }),
})

interface AddNewProductModalProps {
  onDiscard: () => void;
  onSuccess?: () => void;
}

const AddNewProductModal = ({ onDiscard, onSuccess }: AddNewProductModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const createProductMutation = useCreateProductMutation();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      unitPrice: 0,
      quantity: 0,
      mfgDate: "",
      expDate: ""
    },
  })

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles[0]) {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        
        // Create preview URL
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    maxFiles: 1,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!selectedFile) {
      console.error("No image file selected");
      return;
    }

    const productData = {
      name: values.name,
      description: values.description,
      unitPrice: values.unitPrice,
      quantity: values.quantity,
      mfgDate: values.mfgDate,
      expDate: values.expDate,
      imageFile: selectedFile
    };

    try {
      await createProductMutation.mutateAsync(productData);
      onSuccess?.();
      onDiscard();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal content */}
      <div className="relative bg-white px-6 py-4 rounded-lg shadow-lg max-h-[450px] overflow-scroll w-[400px]">
        <h4 className="text-lg font-semibold mb-3">New Product</h4>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="unitPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="Unit price"
                      value={field.value}
                      onChange={e => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="1"
                      placeholder="Quantity"
                      value={field.value}
                      onChange={e => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Image uploader */}
            <div>
              <label className="block text-sm font-medium mb-2">Product Image</label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-md px-4 py-6 text-center cursor-pointer ${
                  isDragActive ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <input {...getInputProps()} />
                {previewUrl ? (
                  <div>
                    <img src={previewUrl} alt="Preview" className="mx-auto mb-2 max-h-24" />
                    <p className="text-sm text-gray-600">{selectedFile?.name}</p>
                  </div>
                ) : isDragActive ? (
                  <p>Drop the image here ...</p>
                ) : (
                  <p>Drag & drop image here, or click to select</p>
                )}
              </div>
              {!selectedFile && (
                <p className="text-red-500 text-sm mt-1">Image is required</p>
              )}
            </div>
            
            <FormField
              control={form.control}
              name="mfgDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manufacturing Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="expDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='w-full flex justify-end items-center gap-3'>
              <Button 
                className='bg-transparent text-gray-900 border-[1px] border-gray-900 hover:bg-transparent cursor-pointer' 
                onClick={onDiscard} 
                type="button"
                disabled={createProductMutation.isPending}
              >
                Discard
              </Button>
              <Button  
                className='text-white text-sm font-medium cursor-pointer' 
                type="submit"
                disabled={createProductMutation.isPending || !selectedFile}
              >
                {createProductMutation.isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AddNewProductModal