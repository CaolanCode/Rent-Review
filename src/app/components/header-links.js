"use client"

import LinkBtn from "./ui/LinkBtn"
import Link from "next/link"

export default function HeaderLinks() {
  return (
    <>
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
    </>
  )
}