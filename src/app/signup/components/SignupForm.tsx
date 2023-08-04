"use client"

import FormButtons from "@/app/components/FormButtons"

export default function SignupForm() {
  const inputClass = "px-4 py-1 rounded-lg focus:outline-none w-full"

  return (
    <form action="" className="flex flex-col gap-4 items-center w-64">
      <input 
        type="text" 
        placeholder="Username" 
        className={inputClass} 
        required
      />
      <input 
        type="text" 
        placeholder="Email" 
        className={inputClass} 
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        className={inputClass} 
        minLength={8}
        required
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        className={inputClass} 
        minLength={8}
        required
      />
      <FormButtons name="Create" />
    </form>
  )
}