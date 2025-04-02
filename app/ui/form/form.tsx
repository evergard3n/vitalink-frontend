'use client'
import Chatbot from "../chatbot/chatbot";
import NavBar from "../navbar/navbar";
import SearchableDropdown from "./chuyenkhoa";
import { inter, poppins } from "@/app/layout";
import { useRouter } from "next/navigation";
export default function Form() {
  const router = useRouter()
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    router.push("/patients/create/checkup")
  }
  return (
    <div className="p-2 rounded-lg overflow-hidden grow h-full">
      
      <div className="w-full h-full bg-white drop-shadow-sm rounded-lg p-8 border-8 border-zinc-100 flex flex-col">
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2 w-full grow">
          <h1 className="text-center font-semibold text-3xl">
            Thông tin cá nhân{" "}
          </h1>
          <label htmlFor="name">Họ và tên </label>
          <input
            required
            type="text"
            id="name"
            className="w-full h-10 border border-zinc-200 rounded-lg pl-2"
          />

          <div className="grid grid-cols-3 w-full gap-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="birth">Ngày sinh </label>
              <input
                type="text"
                id="birth"
                required
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="myDropdown">Giới tính </label>
              <select
                required
                id="myDropdown"
                
                defaultValue={""}
                className="h-10 pl-2 border rounded-lg border-zinc-200"
              >
                <option value="" disabled hidden className="text-zinc-800">
                  Chọn giới tính
                </option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="phone">Số điện thoại </label>
              <input
                id="phone"
                required
                type="text"
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 w-full gap-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="province">Tỉnh/Thành </label>
              <input
                type="text"
                id="province"
                required
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="district">Quận/Huyện </label>
              <input
                type="text"
                id="district"
                required
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="ward">Xã/Phường </label>
              <input
                type="text"
                id="ward"
                required
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="address">Địa chỉ </label>
            <input
              id="address"
              required
              type="text"
              className=" h-10 border border-zinc-200 rounded-lg pl-2"
            />
          </div>
          <h1 className="text-center font-semibold text-3xl pt-8">
            Triệu chứng
          </h1>
          <label>Chuyên khoa</label>
          <SearchableDropdown />
          <label htmlFor="trieuchung">Mô tả triệu chứng </label>
          <textarea id="trieuchung" className="min-h-30 border border-zinc-200 rounded-lg px-2 pt-2 resize-none"></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 transition-colors duration-150 ease-in w-fit px-4 py-2 text-white rounded-lg ml-auto"
          >
            Tiếp tục{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
