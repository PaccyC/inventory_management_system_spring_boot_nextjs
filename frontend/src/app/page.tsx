"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user,setUser]= useState(null);

  const router = useRouter();
  return user ==null ? router.push("/auth/login") :router.push("/core/dashboard");
}
