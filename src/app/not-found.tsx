import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex justify-center h-screen flex-col items-center ">
      <h1
        className="font-black text-8xl sm:text-9xl cursor-default pb-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255, 102, 0), rgb(255, 56, 56))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Oops!
      </h1>
      <div className="max-w-[700px] h-[140px]  flex flex-col justify-around items-center pb-10">
        <h3 className="font-bold tracking-wider text-2xl cursor-default text-orange-500">
          404 - PAGE NOT FOUND
        </h3>
        <p className="text-center px-25 text-sm cursor-default text-orange-500">
          the page you are looking for might have been <br /> removed had its
          name changed or is temporarily unavailable
        </p>
      </div>

      <Link
        className="w-[200px] h-[45px] flex justify-center items-center rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 text-white"
        href="/"
      >
        GO TO HOMEPAGE
      </Link>
    </main>
  );
}
