import SearchInput from "./search-input"

export default function SearchPage() {
  return (
    <div className="flex justify-center items-center h-[90vh] flex-col gap-2 pb-[5vh]">
      <h1 className="text-2xl text-white font-bold">Search a Property</h1>
      <SearchInput />
    </div>
  )
}