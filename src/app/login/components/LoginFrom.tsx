"use client"

import Button from "@/app/components/ui/Button"

export default function LoginForm() {
  return (
    <form action="" className="flex flex-col gap-4 items-center w-64">
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
    </form>
  )
}