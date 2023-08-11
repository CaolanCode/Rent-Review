import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex flex-col justify-center items-center gap-2">
      <div className="text-center text-white">
        <p className="text-2xl">Find a review</p>
      </div>
      <SearchBar />
    </div>
  )
}