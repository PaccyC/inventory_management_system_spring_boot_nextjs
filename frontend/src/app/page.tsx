"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user,setUser]= useState<string |null>(null);

  const router = useRouter();
  return user ==null ? router.push("/auth/login") :router.push("/core/dashboard");
}
