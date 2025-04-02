import { inter } from "@/app/layout";
import Chatbot from "@/app/ui/chatbot/chatbot";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="flex flex-col items-start justify-between h-full px-16 gap-8 w-full">
        <div className="w-full h-20"></div>
        <div className="grow flex flex-col items-start gap-4 relative">
          <h1
            className={`text-6xl  leading-tight ${inter.className} font-semibold`}
          >
            Đăng ký khám bệnh <br></br> dễ dàng{" "}
          </h1>
          <p className="text-md mb-8">
            Sử dụng Chatbot để hỗ trợ điền đơn ngay.{" "}
          </p>
          <Chatbot />
        </div>
      </div>
      {children}
    </div>
  );
}
