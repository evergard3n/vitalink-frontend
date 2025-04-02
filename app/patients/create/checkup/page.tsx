import EditDepartments from "@/app/ui/departments and checkup/editDepartments";
import { ArrowLeftIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const departments: string[] = ["Khoa tai mũi họng", "Khoa tim mạch"];
export default function Page() {
    const dep = departments
  return (
    <div className="p-4 rounded-lg overflow-hidden grow h-full">
      <div className="w-full h-full bg-white rounded-lg p-8 border-8 border-zinc-100 flex flex-col gap-4">
        <Link href={"/patients/create"} className="flex flex-row items-center gap-2"><ArrowLeftIcon width={16} height={16}></ArrowLeftIcon>Quay lại</Link>
        <h1 className="text-left font-bold text-4xl">
          Chuyên khoa đề xuất
        </h1>

        <p>
          Dựa trên triệu chứng và yêu cầu của bạn, đây là các chuyên khoa bạn
          nên tới khám:
        </p>
        <EditDepartments></EditDepartments>
      </div>
    </div>
  );
}
