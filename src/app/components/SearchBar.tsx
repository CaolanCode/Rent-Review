"use client"

import { FaSearchLocation } from "react-icons/fa"

export default function SearchBar() {
  return (
    <div className="py-3 flex justify-center">
      <input 
        type="text" 
        className="focus:outline-none rounded text-lg mr-3 p-2 w-[250px]"
        placeholder="zip-code, city or street"
      />
      <button 
        className="bg-red-600 cursor-pointer rounded px-9 py-2 text-white active:scale-90">
        <FaSearchLocation />
      </button>
    </div>
  )
}