import { PlusCircleIcon } from "@heroicons/react/24/outline";
import NavItem from "./navitem";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
const navItems = [
  {
    href: "/patients/create",
    name: "Đặt lịch khám ",
  },
  {
    href: "/patients/search",
    name: "Tra cứu lịch khám ",
  },
  {
    href: "/patients/chat",
    name: "Trợ lý ảo ",
  },
];

export default function NavBar() {
  return (
    
      <div className="w-[90%] absolute z-20 h-18 bg-linear-to-br from-white to-zinc-150 drop-shadow-xs transition-all duration-200 ease-in backdrop-blur-sm min-h-12 border border-zinc-200 rounded-lg flex flex-row items-center gap-8  px-4">
      <div className="flex flex-row justify-center items-center">
        <Link href={"/"} className="flex flex-row items-center justify-center">
          <PlusCircleIcon width={24} height={24} />
          <h1 className="text-2xl font-black">VitaLink</h1>
        </Link>
        <ol className="flex flex-row items-center gap-12 ml-12">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} name={item.name} />
          ))}
        </ol>
      </div>
    </div>
    
  );
}
