"use client"

import Button from "@/components/ui/Button"
import Link from "next/link"

export default function SignupForm() {
  return (
    <form action="" className="flex flex-col gap-4 items-center w-64">
      <input 
        type="text" 
        placeholder="Username" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full" 
        required
      />
      <input 
        type="text" 
        placeholder="Email" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full" 
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full"
        minLength="8"
        required
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full"
        minLength="8"
        required
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
        className="text-white">Already have an account&#63;&nbsp; 
        <Link 
          href={"/login"} 
          className="underline decoration-2 text-primary" >
            Login
        </Link>
      </p>
    </form>
  )
}