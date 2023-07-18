"use client"

import Button from "@/components/ui/Button"
import Link from "next/link"

export default function SignupForm() {
  return (
    <form action="" className="flex flex-col gap-4 items-center w-64">
      <h1 className="text-white font-bold text-2xl pb-2">Sign Up</h1>
      <input 
        type="text" 
        placeholder="Username" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full" 
      />
      <input 
        type="text" 
        placeholder="Email" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full" 
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full"
      />
      <div className="flex items-center gap-8">
        <Button 
          type="submit"
          name="Create"
        />
        <Button 
          type="reset"
          name="Cancel"
        />
      </div>
      <p 
        className="text-white">Already have an account&#63; 
        <Link 
          href={"/login"} 
          className="underline decoration-2 text-primary" >
            Login
        </Link>
      </p>
    </form>
  )
}