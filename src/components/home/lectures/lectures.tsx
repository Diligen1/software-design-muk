import Image from "next/image";
import Link from "next/link";
import { lecturesData } from "@/types/models/lecture";

export default function Lectures() {
  return (
    <main className="mx-auto" id="lectures">
      <div className="w-full flex flex-col justify-start items-center lectures">
        <div className="w-full h-[80px] flex justify-center items-center">
          <p className="text-[42px] cursor-default">ЛЕКЦИИ</p>
        </div>
        <div className="w-[100%] m-[60px] flex flex-row justify-center items-center flex-wrap gap-[20px]">
          {lecturesData.map((el) => (
            <div
              className="py-[20px] w-[400px] h-[350px] rounded-[32px] border-[1px] border-[var(--text-color)] bg-white flex flex-col justify-between items-center"
              key={el.id}
            >
              <div className="w-[90%] h-[50%] bg-black relative overflow-hidden rounded-[16px]">
                <Image
                  src={el.image}
                  alt="lecture image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="px-[10px] text-[18px] text-center">{el.title}</p>
              <p className="px-[10px] text-[14px]">{el.description}</p>
              <Link
                href={`/lectures/${el.id}`}
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
