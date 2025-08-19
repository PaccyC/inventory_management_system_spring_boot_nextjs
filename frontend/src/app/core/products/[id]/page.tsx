import { Button } from "@/components/ui/button";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="w-full px-6 py-4 bg-transparent">
      <div className="w-full bg-white rounded-lg px-6 py-6 flex flex-col gap-6 shadow-sm">
        
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <h5 className="text-lg font-semibold text-gray-900">Maggi</h5>
          <div className="flex items-center gap-3">
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

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
            <TabsTrigger value="adjustments">Adjustments</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Overview Content */}
          <TabsContent value="overview">
            <div className="w-full grid grid-cols-3 gap-6 mt-6">
              
              {/* Left section */}
              <div className="col-span-2 flex flex-col gap-8">
                {/* Primary Details */}
                <div className="flex flex-col gap-3">
                  <h5 className="text-base font-medium text-gray-800">Primary Details</h5>
                  <div className="flex flex-col gap-2 text-sm text-gray-700">
                    <div className="grid grid-cols-2">
                      <p className="font-medium">Product name</p>
                      <p>Maggi</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-medium">Product ID</p>
                      <p>456567</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-medium">Product category</p>
                      <p>Instant food</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-medium">Expiry Date</p>
                      <p>13/4/23</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-medium">Threshold Value</p>
                      <p>12</p>
                    </div>
                  </div>
                </div>

                {/* Supplier Details */}
                <div className="flex flex-col gap-3">
                  <h5 className="text-base font-medium text-gray-800">Supplier Details</h5>
                  <div className="flex flex-col gap-2 text-sm text-gray-700">
                    <div className="grid grid-cols-2">
                      <p className="font-medium">Supplier name</p>
                      <p>Ronald Martin</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-medium">Contact Number</p>
                      <p>98789 86757</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right section */}
<div className="col-span-1 flex flex-col items-center">
  {/* Product Image */}
  <div className="bg-transparent border border-dashed border-gray-400 px-3 py-3 rounded-sm mb-6">
    <Image
      className="object-contain"
      src="/images/lays.png"
      alt="Maggi"
      width={120}
      height={120}
    />
  </div>

  {/* Stock details */}
  <div className="flex flex-col gap-2 w-full text-sm text-gray-700">
    <div className="grid grid-cols-2">
      <p className="font-medium">Opening Stock</p>
      <p>40</p>
    </div>
    <div className="grid grid-cols-2">
      <p className="font-medium">Remaining Stock</p>
      <p>34</p>
    </div>
    <div className="grid grid-cols-2">
      <p className="font-medium">On the way</p>
      <p>15</p>
    </div>
    <div className="grid grid-cols-2">
      <p className="font-medium">Threshold value</p>
      <p>12</p>
    </div>
  </div>
</div>

            </div>
          </TabsContent>

          {/* Other Tabs */}
          <TabsContent value="purchases">Purchases go here.</TabsContent>
          <TabsContent value="adjustments">Adjustments go here.</TabsContent>
          <TabsContent value="history">History goes here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;
