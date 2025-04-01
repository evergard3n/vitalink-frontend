export default function Form() {
  return (
    <div className="p-2 rounded-lg overflow-hidden grow grid grid-cols-2 h-full">
      <div className="flex flex-col items-start justify-center h-full px-16 gap-8">
        <h1 className="text-5xl font-semibold">
          Đăng ký khám bệnh <br></br> dễ dàng{" "}
        </h1>
        <p className="text-md">Sử dụng Chatbot để hỗ trợ điền đơn ngay. </p>
      </div>
      <div className="w-full h-full bg-white drop-shadow-sm rounded-lg p-8 flex flex-col">
        <h1 className="text-center font-semibold text-3xl">
          Thông tin cá nhân{" "}
        </h1>
        <form action="" className="flex flex-col gap-2 w-full grow">
          <label htmlFor="name">Họ và tên </label>
          <input
            type="text"
            id="name"
            className="w-full h-10 border border-zinc-200 rounded-lg pl-2"
          />

          <div className="grid grid-cols-3 w-full gap-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="name">Ngày sinh </label>
              <input
                type="text"
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="myDropdown">Giới tính </label>
              <select
                id="myDropdown"
                name="myDropdown"
                className="h-10 pl-2 border rounded-lg border-zinc-200"
              >
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
                <option
                  value="grape"
                  disabled
                  hidden
                  selected
                  className="text-zinc-800"
                >
                  Chọn giới tính
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="name">Số điện thoại </label>
              <input
                type="text"
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 w-full gap-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="name">Tỉnh/Thành  </label>
              <input
                type="text"
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="myDropdown">Quận/Huyện  </label>
              <input
                type="text"
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="name">Xã/Phường  </label>
              <input
                type="text"
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
              <label htmlFor="name">Địa chỉ   </label>
              <input
                type="text"
                className=" h-10 border border-zinc-200 rounded-lg pl-2"
              />
            </div>
        </form>
        <button className="bg-blue-500 hover:bg-blue-400 transition-colors duration-150 ease-in w-fit px-4 py-2 text-white rounded-lg ml-auto">
          Tiếp tục{" "}
        </button>
      </div>
    </div>
  );
}
