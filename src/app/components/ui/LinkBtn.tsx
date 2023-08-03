import Link from "next/link"

interface LinkBtnProps {
  path: string;
  name: string;
}

export default function LinkBtn({path, name}: LinkBtnProps) {
  return (
    <div className="text-lg border py-1 px-2 rounded-md border-accent text-primary cursor-pointer hover:bg-neutral" >
      <Link href={path}>
        {name}
      </Link>
    </div>
  )
}