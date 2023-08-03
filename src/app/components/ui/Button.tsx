interface ButtonProps {
  typeValue: "reset" | "submit"
  name: string
}

export default function Button({typeValue, name}: ButtonProps) {
  return (
    <button 
      type={typeValue} 
      className="text-lg border py-1 px-2 rounded-md border-accent text-primary cursor-pointer hover:bg-neutral">
      {name}
    </button>
  )
}