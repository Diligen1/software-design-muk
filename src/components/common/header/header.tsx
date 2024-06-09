"use client";
import Link from "next/link";
export default function Header() {
  return (
    <main className="mx-auto fixed w-full z-10 ">
      <div className=" w-full h-[100px] bg-[var(--second-color)] flex justify-center items-center">
        <div className="w-full h-[80px] flex flex-row justify-around items-center">
          <div className="gap-[40px] flex flex-row justify-around items-center">
            <Link
              href="/#lectures"
              className="text-black text-[18px] hover:scale-[1.2] hover:text-[var(--text-color)] duration-300"
            >
              Лекции
            </Link>
            <Link
              href="/"
              className="text-black text-[18px] hover:scale-[1.2] hover:text-[var(--text-color)] duration-300"
            >
              Учебники
            </Link>
            <Link
              href="/"
              className="text-black text-[18px] hover:scale-[1.2] overflow-hidden hover:text-[var(--text-color)] duration-300"
            >
              Видеоматериал
            </Link>
            <Link
              href="/"
              className="text-black text-[18px] hover:scale-[1.2] hover:text-[var(--text-color)] duration-300"
            >
              Заданий
            </Link>
          </div>
          <div className="flex flex-row gap-[20px]">
            <Link
              href="/"
              className=" text-[18px] px-[25px] py-[8px] bg-black text-[var(--second-color)] rounded-[24px] hover:text-[var(--text-color)] hover:bg-[var(--second-color)] duration-300 border-[var(--second-color)] border-[1px] hover:border-[var(--text-color)]"
            >
              регистрация
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
