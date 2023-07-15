import SearchBtn from "./ui/searchBtn"

export default function Header() {
  return (
    <header className="p-5 border-b-2 border-b-accent flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary cursor-pointer hover:text-sky">Rent Review</h1>
      <SearchBtn />
    </header>
  )
}