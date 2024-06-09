"use client";
import Banner from "@/components/common/banner/banner";
import Link from "next/link";
export default function Promo() {
  return (
    <main className="mx-auto" id="promo">
      <div className="w-full pt-[60px] h-[700px] flex justify-center items-center px-[20px]">
        <div className="w-[35%] h-full flex flex-col items-start justify-center gap-[40px] ">
          <h1 className="text-[42px] font-bold">
            Конструирование программного обеспечения
          </h1>
          <p className="text-left text-[20px]">
            Вам нужноо перейти на лекции что бы посмотреть задачи
          </p>
          <Link
            href="/#lectures"
            className=" cursor-pointer w-[120px] h-[50px] flex justify-center items-center duration-300 rounded-[16px] border-[1px] border-[var(--second-color)] hover:border-[var(--text-color)] bg-[var(--text-color)] hover:bg-[var(--second-color)] text-white hover:text-[var(--text-color)]"
          >
            <p>ПЕРЕЙТИ</p>
          </Link>
        </div>
        <div className="w-[65%] h-[500px] flex-row flex justify-evenly items-center">
          <Banner />
        </div>
      </div>
    </main>
  );
}
