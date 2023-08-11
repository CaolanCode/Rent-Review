"use client"

import { FaSearchLocation } from "react-icons/fa"

export default function SearchBar() {
  return (
    <div className="border-accent border-2 rounded-3xl text-center bg-white w-52 py-2">
      <input 
        type="text" 
        className="focus:outline-none w-32"
        placeholder="Zip-Code"
      />
      <button 
        className="hover:scale-125 cursor-pointer active:scale-100 text-gray ">
        <FaSearchLocation />
      </button>
    </div>
  )
}