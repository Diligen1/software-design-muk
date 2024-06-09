"use client";
import { useState } from "react";
import Image from "next/image";
import image from "../../../../public/assets/img/featured_websites2023-scaled.jpg";
import image_2 from "@/../../muk/public/assets/img/ff805a6cdd5ab31d2d979ea92c5ecf39.jpg";
import image_3 from "@/../../muk/public/assets/img/web-portal.jpeg";
export default function Banner() {
  const [clicked, setClicked] = useState(null);

  const handleBlockClick = (id: any) => {
    setClicked(clicked === id ? null : id);
  };

  const [blockData] = useState([
    {
      id: 1,
      image: image,
    },
    {
      id: 2,
      image: image_2,
    },
    {
      id: 3,
      image: image_3,
    },
  ]);
  return (
    <div className="mx-auto flex flex-row justify-around items-center w-full  h-full">
      {blockData.map((el) => (
        <div
          key={el.id}
          className={`transition-all duration-300 ease-in-out ${
            clicked === el.id
              ? "w-[50%]"
              : el.id === 1 && clicked === null
              ? "w-[50%]"
              : "w-[20%]"
          }`}
          onClick={() => handleBlockClick(el.id)}
        >
          <div
            className="relative w-full h-[450px] bg-[var(--text-color)] rounded-[32px] overflow-hidden"
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
            }}
          >
            <Image src={el.image} alt="image" layout="fill" objectFit="cover" />
          </div>
        </div>
      ))}
    </div>
  );
}
