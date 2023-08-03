interface FormProp {
  name : string
}

export default function FormButtons({name}: FormProp) {
  const classList = "text-lg border py-1 px-2 rounded-md border-accent text-primary cursor-pointer hover:bg-neutral" 
  return (
    <div className="flex items-center gap-8">
      <button 
        type="submit" 
        className={classList}>
        {name}
      </button>
      <button 
        type="reset" 
        className={classList}>
        Cancel
      </button>
    </div>

  )
}