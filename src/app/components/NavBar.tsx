import Link from "next/link"
import AuthModal from "./AuthModal"

export default function Header() {
  return (
    <header className="h-[7vh] px-5  flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#0f1f47] cursor-pointer">
        <Link href="/">Rent Review</Link>
      </h1>
      <div className="flex gap-5">
        <AuthModal isSignIn={true}/>
        <AuthModal isSignIn={false}/>
      </div>
    </header>
  )
}