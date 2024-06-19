import { Header, Footer } from "@/components";
export default function MaterialPage() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="w-full h-[600px] py-[180px] justify-center items-center flex flex-wrap gap-[40px]">
        <div>
          <p className="text-[38px] text-[var(--text-color)]">Видеоматериалы</p>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-[40px]">
          <iframe
            width="560"
            height="315"
            className="rounded-[32px]"
            src="https://www.youtube.com/embed/HWlb41RB8XQ?si=JVzMC6X9uygp659V"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            width="560"
            height="315"
            className="rounded-[32px]"
            src="https://www.youtube.com/embed/dP5E-gHb16c?si=EbniQARav7HS106P"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <Footer />
    </main>
  );
}
