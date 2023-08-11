"use client"

export default function ReviewForm() {
  const inputClass = "rounded-lg focus:outline-none px-4 py-1 w-full"
  return (
    <form 
      action=""
      className="flex flex-col gap-4 items-center">
      <input 
        type="text" 
        placeholder="Zip code" 
        className={inputClass}
      />
      <input 
        type="text" 
        placeholder="Street" 
        className={inputClass}
      />
      <input 
        type="text" 
        placeholder="Town/City" 
        className={inputClass}
      />
      <input 
        type="text" 
        placeholder="County" 
        className={inputClass}
      />
      <input 
        type="text" 
        placeholder="Country" 
        className={inputClass}
      />
      <textarea 
        placeholder="Leave review" 
        className={inputClass}
      />
    </form>
  )
}