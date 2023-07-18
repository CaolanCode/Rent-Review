"use client"

import Button from "@/components/ui/Button"
import Link from "next/link"

export default function LoginForm() {
  return (
      <form action="" className="flex flex-col gap-4 items-center w-64">
        <h1 className="text-white font-bold text-2xl pb-2">Login</h1>
        <input 
          type="text" 
          placeholder="Email" 
          className="px-4 py-1 rounded-lg w-full" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="px-4 py-1 rounded-lg w-full"
        />
        <div className="flex items-center gap-8">
          <Button 
            type="submit"
            name="Login"
          />
          <Button 
            type="reset"
            name="Cancel"
          />
        </div>
        <p 
          className="text-white">Don&#39;t have an account&#63;&nbsp;  
          <Link 
            href={"/signup"} 
            className="underline decoration-2 text-primary" >
            Sign up
          </Link>
        </p>
      </form>
  )
}