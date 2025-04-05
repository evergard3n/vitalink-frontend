"use client";
import Chatbot from "../chatbot/chatbot";
import NavBar from "../navbar/navbar";
import SearchableDropdown from "./chuyenkhoa";
import { inter, poppins } from "@/app/layout";
import { useRouter } from "next/navigation";
import { useWebSocket } from "@/app/lib/wsContext";
import { useEffect, useRef, useState } from "react";
import { FormContents } from "@/app/lib/definitions";

function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer); // Xóa timer nếu giá trị thay đổi trước khi hết delay
    };
  }, [value, delay]);

  return debouncedValue;
}
export default function Form() {
  const router = useRouter();
  const chatbotFormData = useWebSocket()?.formContent;
  const sendFormData = useWebSocket()?.sendFormData;
  const [touching, setTouching] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState(false);

  const [formFields, setFormFields] = useState<FormContents>({
    id: "",
    name: "",
    dob: "",
    gender: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    address: "",
    department: "",
    symptoms: "",
    validated: false,
    dateCreated: "",
    cccd: "",
  });
  const debouncedFormData = useDebounce(formFields, 500);

  useEffect(() => {
    if (!chatbotFormData) return;
    if (JSON.stringify(formFields) !== JSON.stringify(chatbotFormData)) {
      setFormFields(chatbotFormData);
    }
  }, [chatbotFormData]);

  useEffect(() => {
    const cleanFormData = Object.fromEntries(
      Object.entries(debouncedFormData).filter(
        ([_, value]) =>
          typeof value === "string" && value !== "" && value !== null
      )
    );
    if (cleanFormData && sendFormData) {
      sendFormData(cleanFormData);
    }
  }, [debouncedFormData]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    router.push("/patients/create/checkup");
  }
  return (
    <div className="p-2 rounded-lg overflow-hidden grow h-full">
      <div className="w-full h-full bg-white drop-shadow-sm rounded-lg p-8 border-8 border-zinc-100 flex flex-col">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-2 w-full grow"
        >
          <h1 className="text-left font-semibold text-4xl pb-4">
            Thông tin cá nhân
          </h1>
          <label htmlFor="name">Họ và tên </label>
          <input
            required
            type="text"
            id="name"
            value={formFields?.name ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTouching(true);
              setFormFields({ ...formFields, name: event.target.value });
            }}
            className="w-full h-10 border border-zinc-200 rounded-lg pl-2"
          />

          <div className="grid grid-cols-3 w-full gap-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="birth">Ngày sinh </label>
              <input
                type="text"
                id="birth"
                required
                value={formFields?.dob ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTouching(true);
                  setFormFields({ ...formFields, dob: event.target.value });
                }}
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="myDropdown">Giới tính </label>
              <select
                required
                id="myDropdown"
                value={formFields?.gender ?? ""}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setTouching(true);
                  setFormFields({ ...formFields, name: event.target.value });
                }}
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
                value={formFields?.phone ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTouching(true);
                  setFormFields({ ...formFields, phone: event.target.value });
                }}
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
                value={formFields?.province ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTouching(true);
                  setFormFields({
                    ...formFields,
                    province: event.target.value,
                  });
                }}
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="district">Quận/Huyện </label>
              <input
                type="text"
                id="district"
                required
                value={formFields?.district ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTouching(true);
                  setFormFields({
                    ...formFields,
                    district: event.target.value,
                  });
                }}
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="ward">Xã/Phường </label>
              <input
                type="text"
                id="ward"
                required
                value={formFields?.ward ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTouching(true);
                  setFormFields({ ...formFields, ward: event.target.value });
                }}
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Địa chỉ </label>
              <input
                id="address"
                required
                type="text"
                value={formFields?.address ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTouching(true);
                  setFormFields({ ...formFields, address: event.target.value });
                }}
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="address">Số CMTND/CCCD </label>
            <input
              id="cccd"
              required
              type="text"
              value={formFields?.cccd ?? ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTouching(true);
                setFormFields({ ...formFields, cccd: event.target.value });
              }}
              className=" h-10 border border-zinc-200 rounded-lg pl-2"
            />
            </div>
          </div>
          <h1 className="text-left font-semibold text-4xl pt-8 pb-4">
            Triệu chứng
          </h1>
          <label>Chuyên khoa</label>
          <SearchableDropdown />
          <label htmlFor="trieuchung">Mô tả triệu chứng </label>
          <textarea
            id="trieuchung"
            className="min-h-30 border border-zinc-200 rounded-lg px-2 pt-2 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 transition-colors duration-150 ease-in w-fit px-4 py-2 text-white rounded-lg ml-auto mt-auto"
          >
            Tiếp tục{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
