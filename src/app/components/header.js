import HeaderLinks from "./header-links.js"

export default function Header() {
  return (
    <header className="h-[10vh] px-5 border-b-2 border-b-accent flex justify-between items-center">
      <HeaderLinks />
    </header>
  )
}