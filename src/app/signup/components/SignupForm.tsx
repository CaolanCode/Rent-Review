"use client"

import Button from "@/app/components/ui/Button"

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
        minLength={8}
        required
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        className="px-4 py-1 rounded-lg focus:outline-none w-full"
        minLength={8}
        required
      />
      <div className="flex items-center gap-8">
        <Button 
          typeValue="submit"
          name="Create"
        />
        <Button 
          typeValue="reset"
          name="Cancel"
        />
      </div>
    </form>
  )
}