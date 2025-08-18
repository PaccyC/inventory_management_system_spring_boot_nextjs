"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { MdInventory } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiListChecksLight } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const links = [
  { name: "Dashboard", icon: <CiHome/>, route: "/core/dashboard" },
  { name: "Inventory", icon: <MdInventory />, route: "/core/products" },
  { name: "Reports", icon: <HiOutlineDocumentReport/>, route: "/core/reports" },
  { name: "Suppliers", icon: <RiAccountCircleLine />, route: "/core/suppliers" },
  { name: "Orders", icon: <MdOutlineShoppingBag />, route: "/core/orders" },
  { name: "Manage Store", icon: <PiListChecksLight />, route: "/core/manage-store" },
]

interface LeftbarProps {
  onCloseSidebar?: () => void;
}

const Leftbar = ({ onCloseSidebar }: LeftbarProps) => {
  const [isActive, setIsActive] = useState("Dashboard");
  
  const router = useRouter();

  const handleClick = (name: string) => {

    setIsActive(name);
    if (onCloseSidebar) onCloseSidebar(); 
  };


  return (
    <div className="flex flex-col justify-between px-6 py-4 min-h-screen">
      <div className="flex flex-col gap-8">
        <Image 
          src="/images/top-logo.png" 
          alt="Topo logo here" 
          height={100} 
          width={300} 
        />

        <div className="flex flex-col space-y-6">
          {links.map((link) => (
            <Link href={link.route} key={link.name}  onClick={() => {
              router.push(link.route);
              handleClick(link.name)}
              }>
            
              <div
                className={`flex items-center gap-4 cursor-pointer ${
                  isActive === link.name ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onCloseSidebar}>
          <Image src="/icons/settings.svg" alt="Settings icon" height={24} width={24} />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer" onClick={onCloseSidebar}>
          <Image src="/icons/logout.svg" alt="Logout icon" height={24} width={24} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
