import ArrowDownSvg from "./components/svgs/ArrowDownSvg";

export default function Navbar() {
  return (
    <nav className="w-[1380px] mx-auto my-7 flex flex-row justify-between items-center z-10 absolute left-1/2 -translate-x-1/2 top-0 text-white">
      <h1 className="text-xl font-medium">Logo</h1>

      <ul className="flex flex-row items-center gap-x-10 font-medium cursor-pointer">
        <li>Home</li>
        <li className="flex flex-row items-center gap-x-2">Services <ArrowDownSvg /></li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <h1 className="font-medium">+995 599 410821</h1>
    </nav>
  );
}
