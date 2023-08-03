import Link from "next/link"
import SignupForm from "./components/SignupForm"

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-[90vh] pb-[5vh] flex-col">
      <h1 className="text-white font-bold text-2xl pb-2">Sign Up</h1>
      <SignupForm />
      <p 
        className="text-white mt-2">Already have an account&#63;&nbsp; 
        <Link 
          href={"/login"} 
          className="underline decoration-2 text-primary" >
            Login
        </Link>
      </p>
    </div>
  )
}