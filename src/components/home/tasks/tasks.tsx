"use client";
import { useRef } from "react";
export default function Tasks() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current?.files?.length) {
      const file = fileInputRef.current.files[0];
      console.log("Выбранный файл:", file);
    } else {
      console.log("Файл не выбран");
    }
  };
  return (
    <main className="mx-auto" id="tasks">
      <div className="w-full h-[300px] flex justify-end items-center ">
        <div className="w-[50%] h-[200px] rounded-[32px] flex flex-col justify-around items-center bg-[var(--text-color)]">
          <p className="text-[24px] text-white">Отправка заданий</p>
          <div className="cursor-pointer hover:bg-white hover:text-[var(--text-color)] duration-300 rounded-[8px] w-[250px] h-[60px] border-[1px] border-white text-white flex justify-center items-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <div onClick={() => fileInputRef.current?.click()}>Отправить</div>
          </div>
        </div>
      </div>
    </main>
  );
}
