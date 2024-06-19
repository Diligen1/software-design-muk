import { Header, Footer } from "@/components";
export default function TextbooksPage() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="w-full h-[100vh] gap-[40px] flex flex-wrap justify-center items-center">
        <div className="w-[40%] h-[400px] bg-[var(--bg-color)] gap-[20px] flex flex-col items-center justify-center py-[40px]">
          <p className="text-[24px] text-center">
            Тестирование Программного Обеспечения
          </p>
          <a
            href="../../../public/assets/fail/Software Testing - Base Course (Svyatoslav Kulikov) - 3rd edition - typographic version.pdf"
            download="Software Testing - Base Course (Svyatoslav Kulikov) - 3rd edition - typographic version.pdf"
            className="cursor-pointer w-[200px] h-[50px] rounded-[8px] bg-[var(--text-color)] flex justify-center items-center text-[var(--bg-color)] text-[20px]"
          >
            Скачать
          </a>
        </div>
        <div className="w-[40%] h-[400px] bg-[var(--bg-color)] gap-[20px] flex flex-col items-center justify-center py-[40px]">
          <p className="text-[24px] text-center">
            Проектирование Интерфейсов Пользователя
          </p>
          <a
            href="../../../public/assets/fail/Brusencova_proektirovanie_2019.pdf"
            download="Brusencova_proektirovanie_2019.pdf"
            className="cursor-pointer w-[200px] h-[50px] rounded-[8px] bg-[var(--text-color)] flex justify-center items-center text-[var(--bg-color)] text-[20px]"
          >
            Скачать
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
