import Link from "next/link"
import LoginForm from "./components/LoginFrom"

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[90vh] pb-[5vh] flex-col">
      <h1 className="text-white font-bold text-2xl pb-2">Login</h1>
      <LoginForm />
      <p 
        className="text-white">Don&#39;t have an account&#63;&nbsp;  
        <Link 
          href={"/signup"} 
          className="underline decoration-2 text-primary" >
          Sign up
        </Link>
      </p>
    </div>
  )
}