"use client";
import Image from "next/image";
import image from "../../../../public/assets/img/615142884f765694638137.png";
import Link from "next/link";
export default function Textbooks() {
  return (
    <main className="mx-auto">
      <div
        className="w-full h-[450px] bg-[var(--text-color)] flex flex-row"
        id="textbooks"
      >
        <div className="w-[50%] h-full flex flex-col justify-evenly items-start  px-[30px]">
          <p className="text-white text-[20px]">Основы Конструирования ПО</p>
          <p className="text-[38px] text-white">
            Основы Конструирования Программного Обеспечения
          </p>
          <p className="text-[20px] text-white">
            Этот учебник предлагает всестороннее введение в конструирование
            программного обеспечения, охватывая ключевые концепции и методики,
          </p>
          <Link
            passHref
            href="/textbooks"
            className="cursor-pointer rounded-[16px] w-[240px] h-[50px] duration-300 border-white border-[1px]  hover:bg-white text-white hover:text-[var(--text-color)] flex justify-center items-center"
          >
            Посмотреть учебники
          </Link>
        </div>
        <div className="w-[60%] h-full">
          <Image src={image} alt="text" layout="adv" objectFit="cover" />
        </div>
      </div>
    </main>
  );
}
