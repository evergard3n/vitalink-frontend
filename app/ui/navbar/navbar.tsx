import { PlusCircleIcon } from "@heroicons/react/24/outline";
import NavItem from "./navitem";

const navItems = [
  {
    href: "/create",
    name: "Đặt lịch khám ",
  },
  {
    href: "/search",
    name: "Tra cứu lịch khám ",
  },
  {
    href: "/chat",
    name: "Trợ lý ảo ",
  },
];

export default function NavBar() {
  return (
    <div className="w-[98%] fixed z-20 h-18 bg-linear-to-br from-white to-zinc-150 drop-shadow-xs transition-all duration-200 ease-in backdrop-blur-sm min-h-12 mt-4 mx-4 border border-zinc-200 rounded-lg flex flex-row items-center gap-8 justify-between px-4">
      <div className="flex flex-row justify-center items-center">
        <PlusCircleIcon width={24} height={24} />
        <h1 className="text-2xl font-black">VitaLink</h1>
        <ol className="flex flex-row items-center gap-12 ml-12">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} name={item.name} />
          ))}
        </ol>
      </div>
    </div>
  );
}
