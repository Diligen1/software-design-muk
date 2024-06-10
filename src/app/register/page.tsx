"use client";
import Link from "next/link";
export default function Register() {
  return (
    <main className="mx-auto">
      <div className="w-full h-[100vh] flex flex-col gap-[20px] justify-center items-center bg-[var(--second-color)] ">
        <div className="w-[450px] h-[300px] bg-[var(--text-color)] flex flex-col justify-evenly items-center rounded-[16px]">
          <input
            type="email"
            placeholder="Почта"
            className="w-[80%] h-[50px] p-4 rounded-[8px] bg-[var(--second-color)] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-[80%] h-[50px] p-4 rounded-[8px] bg-[var(--second-color)] focus:outline-none"
          />
          <Link
            href="/"
            className="w-[220px] h-[50px] border-[1px] border-white flex justify-center items-center text-white cursor-pointer text-[18px] hover:bg-white hover:text-[var(--text-color)] duration-300 rounded-[8px]"
          >
            Отправить
          </Link>
        </div>
        <p className="cursor-pointer text-underline text-[var(--text-color)] text-[18px]">
          Авторизация
        </p>
      </div>
    </main>
  );
}
