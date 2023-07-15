
export default function Button({type, name}) {
  return (
    <button 
      type={type} 
      className="text-lg border py-1 px-2 rounded-md border-accent text-primary cursor-pointer hover:bg-neutral">
      {name}
    </button>
  )
}