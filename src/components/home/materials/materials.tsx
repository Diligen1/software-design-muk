"use client";
export default function Materials() {
  return (
    <main className="mx-auto">
      <div className="w-full h-[500px] relative flex flex-row justify-evenly gap-[40px] items-center px-[20px]">
        <div className="w-[60%] rounded-[32px] overfolw-hidden">
          <video
            className="rounded-lg shadow-lg"
            width="800"
            height="450"
            controls
          >
            <source src="/assets/video/still here.mp4" type="video/mp4" />
          </video>
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
          <div className="w-[200px] h-[40px] bg-[var(--text-color)] flex justify-center items-center text-white hover:bg-white hover:text-[var(--text-color)] border-[1px] border-[var(--text-color)] duration-300 rounded-[8px] cursor-pointer">
            Просмотреть видео
          </div>
        </div>
      </div>
    </main>
  );
}
