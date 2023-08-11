import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="h-64 mt-4 m-auto flex flex-col justify-center items-center gap-1">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Welcome to <span className="text-primary">Rent Review</span>.</h2>
        <p className="text-lg">A community for tenents to share experiences with rentals.</p>
      </div>
      <SearchBar />
    </div>
  )
}