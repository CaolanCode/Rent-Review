import Link from "next/link"

export default function HeaderButtons() {
  const buttonClass = "text-lg border py-1 px-2 rounded-md border-accent text-primary cursor-pointer hover:bg-neutral"

  return (
    <div className="flex gap-5">
      <div className={buttonClass} >
        <Link href="/search">
          Search
        </Link>
      </div>
      <div className={buttonClass} >
        <Link href="/login">
          Login
        </Link>
      </div>
    </div>
  )
}