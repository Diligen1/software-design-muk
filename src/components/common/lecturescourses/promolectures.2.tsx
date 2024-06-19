"use client";
export default function Promolectures() {
  return (
    <main className="mx-auto">
      <div className="w-full flex flex-col items-center justify-center py-[40px]">
        <div className="w-[50%] h-[600px] flex flex-col justify-center items-center">
          <p className="text-[38px] text-[var(--text-color)] text-center">
            Жизненный цикл программного обеспечения.
          </p>
          <p className="text-center text-[18px] text-[var(--text-color)]">
            <span className="text-[20px]">Введение </span> <br /> Жизненный цикл
            – это модель создания и использования программной системы. Он
            отражает различные состояния программной системы, начиная с момента
            возникновения необходимости в этой программной системе и принятия
            решения о ее создании и заканчивая полным изъятием программной
            системы из эксплуатации. Международный стандарт ISOIES 12207
            регламентирует структуру жизненного цикла, содержащую процессы,
            действия и задачи, которые должны быть выполнены во время создания
            программного обеспечения. По этому стандарту жизненный цикл
            программного обеспечения базируется на трех группах процессов:
          </p>
        </div>
        <a
          href="../../../../public/assets/fail/лек.docx"
          download="лек.docx"
          className="cursor-pointer w-[250px] h-[60px] rounded-[8px] bg-[var(--text-color)] flex justify-center items-center text-[var(--bg-color)] text-[24px]"
        >
          Скачать
        </a>
      </div>
    </main>
  );
}
