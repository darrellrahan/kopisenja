import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black fixed inset-0 flex items-center justify-center">
      <div className="bg-white">
        <form className="mx-12 my-8 flex flex-col gap-4">
          <label htmlFor="username" className="font-semibold">
            Nama atau Alamat Email
          </label>
          <input
            type="text"
            id="username"
            className="border border-solid border-black h-12 w-72 px-4"
          />
          <label htmlFor="password" className="font-semibold">
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            className="border border-solid border-black h-12 w-72 px-4"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="scale-125" />
            <label htmlFor="remember">Ingat Saya</label>
          </div>
          <Link
            href="/"
            className="bg-gold hover:bg-goldHover transition-all duration-300 ease-linear h-12 w-full flex items-center justify-center font-extrabold text-white"
          >
            Masuk
          </Link>
          <Link
            href="/"
            className="text-sm text-center text-grey font-bold underline hover:no-underline"
          >
            Lupa kata sandi?
          </Link>
        </form>
        <hr className="border border-solid border-black65" />
        <p className="my-4 text-center text-sm font-bold">
          Belum punya akun?{" "}
          <Link href="/" className="underline hover:no-underline text-gold">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
