"use client"

import FormButtons from "@/app/components/FormButtons"

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
      <FormButtons name="Login" />
    </form>
  )
}