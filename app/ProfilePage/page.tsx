"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const API_URL = "https://practice.amirm.me";

const ProfilePage = () => {
    const router = useRouter();
    const [user,setUser]=useState<{username:string} | null> (null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
            router.push("/login");
            return
        }
        const getUser =async () =>{
            const res = await fetch(`${API_URL}/auth/me`,{
                headers:{ Authorization: `Bearer ${token}`},
            });
            if(res.ok){
                const data = await res.json();
                console.log(data);
                setUser(data);
            }else{
                localStorage.removeItem("token")
                router.push("/login");
            }
        };
        getUser();
    },[router])
    if (!user) {
        return <p className="text-center mt-5">Loading...</p>;
      }
  return (
    <div className='flex flex-col items-center mt-6'>
        <h1 className="text-4xl font-bold">Hello {user.username} </h1>
    </div>
  )
}

export default ProfilePage