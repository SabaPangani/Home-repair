import { useState } from "react";
import ArrowDownSvg from "./components/svgs/ArrowDownSvg";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="w-full max-w-[1400px] mx-auto my-7 flex flex-row justify-between items-center z-10 absolute left-1/2 -translate-x-1/2 top-0 text-white px-3">
      <h1 className="text-xl font-medium">Logo</h1>

      <ul className="flex flex-row items-center gap-x-10 font-medium cursor-pointer sm:hidden">
        <li className="hover:opacity-80 transition-all">Home</li>
        <li
          className="relative h-10 flex justify-center items-center"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="flex flex-row items-center gap-x-2 cursor-pointer">
            <span className="hover:opacity-80 transition-all">Services</span>
            <ArrowDownSvg fill="#ffffff" size={11} />
          </div>
          {showDropdown && (
            <ul className="absolute top-10 left-0 bg-white text-[#000000d4] w-[200px] py-2 rounded-sm text-base flex flex-col gap-y-2 text-[14.5px]">
              <li className="border-b border-[#000000ad] px-2 pb-1">
                PAINTING
              </li>
              <li className="border-b border-[#000000ad] px-2 pb-1">
                INSTALLING
              </li>
              <li className="border-b border-[#000000ad] px-2 pb-1">
                BUILDING
              </li>
              <li className="border-b border-[#000000ad] px-2 pb-1">DESIGN</li>
              <li className="border-b border-[#000000ad] px-2 pb-1">
                PLANNING
              </li>
              <li className="px-2">FURNISHINGS</li>
            </ul>
          )}
        </li>
        <li className="hover:opacity-80 transition-all">About</li>
        <li className="hover:opacity-80 transition-all">Contact</li>
      </ul>
      <h1 className="font-medium">+995 599 410821</h1>
    </nav>
  );
}
