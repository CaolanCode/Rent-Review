import Button from "@/components/ui/Button"
import Link from "next/link"

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-[90vh] pb-[5vh]">
      <form action="" className="flex flex-col gap-4 items-center">
        <h1 className="text-white font-bold text-2xl pb-2">Sign Up</h1>
        <input 
          type="text" 
          placeholder="Username/email" 
          className="px-4 py-1 rounded-lg focus:outline-none" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="px-4 py-1 rounded-lg focus:outline-none"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="px-4 py-1 rounded-lg focus:outline-none"
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
    </div>
  )
}