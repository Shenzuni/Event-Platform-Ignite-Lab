import { HamburgerIcon, IgniteIcon } from "../assets/svg"

interface HeaderProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ setShowSidebar }: HeaderProps) {
  return (
    <header className="w-full h-[52px] lg:h-[72px] py-4 px-7 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600">
      {IgniteIcon}
      <button
        className="block lg:hidden"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {HamburgerIcon}
      </button>
    </header>
  )
}
