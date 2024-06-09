"use client";
import { useState } from "react";
import Image from "next/image";
import image from "../../../../public/assets/img/featured_websites2023-scaled.jpg";
import image_2 from "../../../../public/assets/img/web-portal.jpeg";
import image_3 from "../../../../public/assets/img/ff805a6cdd5ab31d2d979ea92c5ecf39.jpg";
import Link from "next/link";

export default function Lectures() {
  const [lectures] = useState([
    {
      id: 1,
      image: image,
      title: "Тема лекции",
      text: "Lorem ipsum dolor.  ad non tenetur ut architecto culpa sed aspernatur vitae porro, nulla ea doloribus? Non, omnis.",
      put: "/#promo",
    },
    {
      id: 2,
      image: image_2,
      title: "Тема лекции",
      text: "Lorem ipsum dolor. ad non tenetur ut architecto culpa sed aspernatur vitae porro, nulla ea doloribus? Non, omnis.",

      put: "/#promo",
    },
    {
      id: 3,
      image: image_3,
      title: "Тема лекции",
      text: "Lorem ipsum dolor.  ad non tenetur ut architecto culpa sed aspernatur vitae porro, nulla ea doloribus? Non, omnis.",
      put: "/#promo",
    },
    {
      id: 4,
      image: image_3,
      title: "Тема лекции",
      text: "Lorem ipsum dolor.  ad non tenetur ut architecto culpa sed aspernatur vitae porro, nulla ea doloribus? Non, omnis.",
      put: "/#promo",
    },
    {
      id: 5,
      image: image_3,
      title: "Тема лекции",
      text: "Lorem ipsum dolor.  ad non tenetur ut architecto culpa sed aspernatur vitae porro, nulla ea doloribus? Non, omnis.",
      put: "/#promo",
    },
    {
      id: 6,
      image: image_3,
      title: "Тема лекции",
      text: "Lorem ipsum dolor.  ad non tenetur ut architecto culpa sed aspernatur vitae porro, nulla ea doloribus? Non, omnis.",
      put: "/#promo",
    },
  ]);

  return (
    <main className="mx-auto" id="lectures">
      <div className=" w-full  flex flex-col justify-start items-center lectures">
        <div className="w-full h-[80px] flex justify-center items-center ">
          <p className="text-[42px] cursor-default ">ЛЕКЦИИ</p>
        </div>
        <div className="w-[100%] m-[60px] flex flex-row justify-center items-center flex-wrap gap-[20px]">
          {lectures.map((el, index) => (
            <div
              className="py-[20px] w-[400px] h-[250px] rounded-[32px] border-[1px] border-[var(--text-color)] bg-white flex flex-col justify-center items-center"
              key={index}
            >
              <div className="w-[90%] h-[50%] bg-black relative overflow-hidden rounded-[16px]">
                <Image
                  src={el.image}
                  alt="text"
                  layout="text"
                  objectFit="cover"
                />
              </div>
              <p className="px-[10px] text-[20px]">{el.title}</p>
              <p className="px-[10px] text-[16px]">{el.text}</p>
              <Link
                href={el.put}
                className="cursor-pointer py-[10px] px-[25px] bg-[var(--text-color)] border-[1px] border-[var(--text-color)] text-[var(--second-color)] hover:text-[var(--text-color)] hover:bg-[var(--second-color)] duration-300 rounded-[8px]"
              >
                ПЕРЕЙТИ
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
