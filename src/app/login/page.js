import Button from "@/components/ui/Button"
import Link from "next/link"

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[90vh] pb-[5vh]">
      <form action="" className="flex flex-col gap-4 items-center">
        <h1 className="text-white font-bold text-2xl pb-2">Login</h1>
        <input 
          type="text" 
          placeholder="Username/email" 
          className="px-4 py-1 rounded-lg" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="px-4 py-1 rounded-lg"
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
        <p className="text-white">Don&#39;t have an account&#63; <Link href={"/signup"} className="underline decoration-2 text-primary" >Sign up</Link></p>
      </form>
    </div>
  )
}