import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex flex-col justify-center items-center">
      <p className="text-2xl text-white">Find a review</p>
      <SearchBar />
    </div>
  )
}