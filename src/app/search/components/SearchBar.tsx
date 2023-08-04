"use client"

import { FaSearchLocation } from "react-icons/fa"

export default function SearchBar() {
  return (
    <div className="px-10 py-3 border-accent border-2 rounded-3xl text-center bg-white">
      <input 
        type="text" 
        className="focus:outline-none"
        placeholder="Zip-Code"
      />
      <button 
        className="hover:scale-125 cursor-pointer active:scale-100">
        <FaSearchLocation />
      </button>
    </div>
  )
}