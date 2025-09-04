"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/hooks";

export default function Home() {

   const {token}= useAppSelector((state)=>state.user);

  const router = useRouter();
  return token === "" ? router.push("/auth/login") :router.push("/core/dashboard");
}
