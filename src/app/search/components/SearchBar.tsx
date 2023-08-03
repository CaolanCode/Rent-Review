"use client"

export default function SearchBar() {
  return (
    <input 
      type="text" 
      className="px-10 py-3 border-accent border-2 rounded-3xl text-center focus:outline-none" 
      placeholder="Zip-Code"
    />
  )
}