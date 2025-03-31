import Image from "next/image";
import { PlusCircleIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="md:w-2/3 md:h-1/2 bg-white rounded-2xl drop-shadow-lg grid grid-cols-2">
        <div className="h-full flex flex-col items-start justify-center px-10 bg-zinc-50">
          <div className="flex flex-row items-center">
            <PlusCircleIcon
              width={50}
              height={50}
              className=""
            ></PlusCircleIcon>
            <h1 className="text-6xl font-black">VitaLink</h1>
          </div>
        </div>
        <div>
          <div className="h-full flex flex-col justify-center items-center py-4">
          <Link href={"/create-form"} className="w-2/3 h-16  rounded-lg flex justify-center items-center gap-2">
            <DocumentPlusIcon width={16} height={16} className="text-black"></DocumentPlusIcon>
            <p className=" text-lg">Đặt lịch khám</p>
          </Link>
          <div className="w-3/4 h-0.5 bg-zinc-200"></div>
          <Link href={"/create-form"} className="w-2/3 h-16 rounded-lg flex justify-center items-center">
            <p className=" text-lg">Tra cứu lịch khám</p>
          </Link>
          <Link href={"/create-form"} className="w-2/3 h-16  rounded-lg flex justify-center items-center">
            <p className=" text-lg">Sử dụng Trợ lý ảo</p>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
