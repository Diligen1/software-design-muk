"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <main className="mx-auto">
      <div className="w-full h-[250px] flex flex-col justify-evenly items-center bg-[var(--bg-color)]">
        <div className="w-[40px] h-[40px] rounded-[50%] bg-[var(--text-color)]"></div>
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
        <div className="w-[20%] flex flex-row justify-evenly items-center ">
          <Link href="/">
            <i className="fi fi-brands-whatsapp text-[28px] h-[32px] text-[var(--text-color)] cursor-pointer hover:scale-125 duration-300"></i>
          </Link>
          <i className="fi fi-brands-telegram text-[28px] h-[32px]  text-[var(--text-color)] cursor-pointer hover:scale-125 duration-300"></i>
          <i className="fi fi-brands-instagram text-[28px] h-[32px] text-[var(--text-color)] cursor-pointer hover:scale-125 duration-300"></i>
        </div>
        <p>Bishkek 2024</p>
      </div>
    </main>
  );
}
