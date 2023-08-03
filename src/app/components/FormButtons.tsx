interface FormProp {
  name : string
}

export default function FormButtons({name}: FormProp) {
  return (
    <div className="flex items-center gap-8">
      <button 
        type="submit" 
        className="text-lg border py-1 px-2 rounded-md border-accent text-primary cursor-pointer hover:bg-neutral">
        {name}
      </button>
      <button 
        type="reset" 
        className="text-lg border py-1 px-2 rounded-md border-accent text-primary cursor-pointer hover:bg-neutral">
        Cancel
      </button>
    </div>

  )
}