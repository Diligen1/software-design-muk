"use client";
export default function Promolectures() {
  return (
    <main className="mx-auto">
      <div className="w-full flex flex-col items-center justify-center py-[40px]">
        <div className="w-[50%] h-[600px] flex flex-col justify-center items-center">
          <p className="text-[38px] text-[var(--text-color)] text-center">
            Конструирование Программного Обеспечения
          </p>
          <p className="text-center text-[18px] text-[var(--text-color)]">
            <span className="text-[20px]">Введение </span> <br /> В данном
            пособии представлено базовое описание процедур создания программного
            обеспечения с использованием методов верификации, кодирования и
            тестирования компонентов. В главе 1 выделяются основные понятия и
            положения обеспечения процесса конструирования. В главе 2 приводятся
            процедуры по управлению процессом конструирования от планирования до
            выбора модели жизненного цикла программного обеспечения. В 3-й главе
            содержится материал, включающий в себя ряд практик и принципов
            конструирования, применение методологий разработки, тестирования
            программного обеспечения. Пособие предназначено для студентов
            направления 09.03.04 «Программная инженерия», изучающих дисциплину
            «Конструирование программного обеспечения».
          </p>
        </div>
        <a
          href="/assets/fail/КПО.Лекции.pdf"
          download="КПО.Лекции.pdf"
          className="cursor-pointer w-[250px] h-[60px] rounded-[8px] bg-[var(--text-color)] flex justify-center items-center text-[var(--bg-color)] text-[24px]"
        >
          Скачать
        </a>
      </div>
    </main>
  );
}
