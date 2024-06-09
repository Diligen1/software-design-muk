"use client";
import Banner from "@/components/common/banner/banner";
export default function Promo() {
  return (
    <main className="mx-auto">
      <div className="w-full pt-[60px] h-[700px] flex justify-center items-center px-[20px]">
        <div className="w-[35%] h-full flex flex-col items-start justify-center gap-[40px] ">
          <h1 className="text-[42px] font-bold">
            Конструирование программного обеспечения
          </h1>
          <p className="text-left text-[16px]">
            Вам нужноо перейти на лекции что бы посмотреть задачи
          </p>
          <div className="px-[35px] py-[10px] cursor-pointer duration-300 rounded-[16px] border-[1px] border-[var(--second-color)] hover:border-[var(--text-color)] bg-[var(--text-color)] hover:bg-[var(--second-color)] text-white hover:text-[var(--text-color)]">
            <p>ПЕРЕЙТИ</p>
          </div>
        </div>
        <div className="w-[65%] h-[500px] flex-row flex justify-evenly items-center">
          <Banner />
        </div>
      </div>
    </main>
  );
}
