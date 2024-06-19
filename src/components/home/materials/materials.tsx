"use client";
import Link from "next/link";
export default function Materials() {
  return (
    <main className="mx-auto" id="material">
      <div className="w-full h-[500px] relative flex flex-row justify-evenly gap-[40px] items-center px-[20px]">
        <div className="w-[60%] h-[435px] rounded-[32px] overfolw-hidden">
          <iframe
            width="560"
            height="315"
            className="w-full h-[435px] rounded-[32px]"
            src="https://www.youtube.com/embed/eMTwSEl7zwA"
            title="YouTube video player"
            allow="accelerometer; autoplay; "
          ></iframe>
        </div>
        <div className="w-[40%] h-[60%]  flex flex-col justify-evenly items-start">
          <p className="text-[32px]">Видео Материалы Курсов</p>
          <div>
            <p>
              Наши видео материалы предоставляют подробное и наглядное обучение
              по различным темам, связанным с программированием и разработкой
              программного обеспечения.
            </p>
          </div>
          <Link
            passHref
            href="/material"
            className="w-[200px] h-[60px] bg-[var(--text-color)] flex justify-center items-center text-white hover:bg-white hover:text-[var(--text-color)] border-[1px] border-[var(--text-color)] duration-300 rounded-[8px] cursor-pointer"
          >
            Просмотреть видео
          </Link>
        </div>
      </div>
    </main>
  );
}
