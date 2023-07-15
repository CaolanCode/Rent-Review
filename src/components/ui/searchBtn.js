import Link from "next/link"

export default function SearchBtn() {
  return (
    <div className="text-lg border py-1 px-2 rounded-md border-accent text-primary cursor-pointer hover:bg-neutral" >
      <Link href="/search">Search</Link>
    </div>
  )
}