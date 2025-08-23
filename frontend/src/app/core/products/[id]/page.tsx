import { Button } from "@/components/ui/button";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="w-full px-4 py-4 sm:px-6 md:px-8 lg:px-12 bg-transparent">
      <div className="w-full bg-white rounded-lg px-4 py-6 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-6 shadow-sm">
        
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h5 className="text-lg font-semibold text-gray-900">Maggi</h5>
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <Button
              className="bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-100 cursor-pointer"
              type="button"
            >
              Edit
            </Button>
            <Button
              className="bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 cursor-pointer"
              type="button"
            >
              Download
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full md:w-1/2 overflow-x-auto whitespace-nowrap">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
            <TabsTrigger value="adjustments">Adjustments</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="w-full flex flex-col-reverse gap-6 mt-6 md:flex-row px-3 py-3 flex-1">
              
              {/* Left section */}
              <div className="flex flex-col gap-8 flex-1/2 md:pr-24">
                <div className="flex flex-col gap-3">
                  <h5 className="text-base font-medium text-gray-800">Primary Details</h5>
                  <div className="flex flex-col gap-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <p className="font-medium">Product name</p>
                      <p>Maggi</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium">Product ID</p>
                      <p>456567</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium">Product category</p>
                      <p>Instant food</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium">Expiry Date</p>
                      <p>13/4/23</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium">Threshold Value</p>
                      <p>12</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h5 className="text-base font-medium text-gray-800">Supplier Details</h5>
                  <div className="flex flex-col gap-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <p className="font-medium">Supplier name</p>
                      <p>Ronald Martin</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium">Contact Number</p>
                      <p>98789 86757</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="h-full flex flex-col items-center justify-between flex-1/2 md:px-4">
                  <div className="bg-transparent border border-dashed border-gray-400 p-3 rounded-sm">
                    <Image
                      className="object-contain"
                      src="/images/lays.png"
                      alt="Maggi"
                      width={120}
                      height={120}
                    />
                  </div>

                    <div className="w-full flex flex-col gap-4 text-sm text-gray-700 ">
                      <div className="flex w-full justify-between">
                        <p className="font-medium">Opening Stock</p>
                        <p>40</p>
                      </div>
                      <div className="flex w-full justify-between">
                        <p className="font-medium">Remaining Stock</p>
                        <p>34</p>
                      </div>
                      <div className="flex w-full justify-between">
                        <p className="font-medium">Opening Stock</p>
                        <p>40</p>
                      </div>
                      <div className="flex w-full justify-between">
                        <p className="font-medium">Remaining Stock</p>
                        <p>34</p>
                      </div>
                    </div>
             
                </div>
              </div>
            
          </TabsContent>

          {/* Other Tabs */}
          <TabsContent value="purchases">Purchases go here.</TabsContent>
          <TabsContent value="adjustments">Adjustments go here.</TabsContent>
          <TabsContent value="history">History go here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;