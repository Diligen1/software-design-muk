"use client";
import Link from "next/link";
export default function Header() {
  return (
    <main className="mx-auto w-full fixed z-10 ">
      <div className=" w-full h-[90px] bg-[var(--second-color)] flex justify-center items-center">
        <div className="w-full h-[60px] flex flex-row justify-around items-center">
          <div className="gap-[40px] flex flex-row justify-around items-center">
            <Link
              passHref
              href="/#lectures"
              className="text-black text-[18px] hover:scale-[1.2] hover:text-[var(--text-color)] duration-300 text-underline"
            >
              Лекции
            </Link>
            <Link
              passHref
              href="/#textbooks"
              className="text-black text-[18px] hover:scale-[1.2] hover:text-[var(--text-color)] duration-300 text-underline"
            >
              Учебники
            </Link>
            <Link
              passHref
              href="/#material"
              className="text-black text-underline text-[18px] hover:scale-[1.2] overflow-hidden hover:text-[var(--text-color)] duration-300"
            >
              Видеоматериал
            </Link>
            <Link
              passHref
              href="/#tasks"
              className="text-black text-underline text-[18px] hover:scale-[1.2] hover:text-[var(--text-color)] duration-300"
            >
              Задания
            </Link>
          </div>
          <div className="flex flex-row gap-[20px]">
            <Link
              passHref
              href="/"
              className=" text-[18px] px-[25px] py-[8px] bg-[var(--text-color)] text-[var(--second-color)] rounded-[24px] hover:text-[var(--text-color)] hover:bg-[var(--second-color)] duration-300 border-[var(--second-color)] border-[1px] hover:border-[var(--text-color)]"
            >
              регистрация
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
