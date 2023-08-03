import Link from "next/link"
import LinkBtn from "./ui/LinkBtn"

export default function Header() {
  return (
    <header className="h-[10vh] px-5 border-b-2 border-b-accent flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary cursor-pointer hover:text-sky">
        <Link href="/">Rent Review</Link>
      </h1>
      <div className="flex gap-5">
        <LinkBtn 
          path="/search"
          name="Search"
        />
        <LinkBtn 
          path="/login"
          name="Login"
        />
      </div>
    </header>
  )
}