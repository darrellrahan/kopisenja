import Image from "next/image";
import Link from "next/link";
import { homeMenuData } from "./data";
import Header from "./Header";
import MenuCard from "./MenuCard";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="top-0 inset-x-0 bg-heroBg bg-contain bg-no-repeat bg-right h-650px flex flex-col justify-center gap-16 px-16">
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="text-white font-bold text-4xl tracking-wider">
              Selamat datang di
            </h1>
            <Image
              src="assets/svg/logo.svg"
              alt="Kopi Senja"
              width={200}
              height={200}
            />
          </div>
          <p className="text-grey font-bold text-lg">
            Secangkir kopi autentik dan berkualitas tinggi <br /> Kopi Senja
            menyajikan segelas kopi terbaik untuk anda.
          </p>
        </div>
        <div>
          <Link
            href="/menu"
            className="bg-gold text-white font-bold p-4 rounded-35px transition-all duration-300 ease-linear hover:opacity-75"
          >
            Pesan sekarang
          </Link>
        </div>
      </div>
      <div className="space-y-8">
        <div className="px-16 py-4 space-y-16">
          <Image
            src="assets/svg/about-line.svg"
            alt="Kopi Senja"
            width={1136}
            height={28}
            className="w-full"
          />
          <div className="flex items-center gap-28">
            <Image
              src="assets/svg/about-coffee.svg"
              alt="Kopi Senja"
              width={369}
              height={637}
            />
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-white font-bold text-8xl">Tentang</h1>
                <Image
                  src="assets/svg/logo.svg"
                  alt="Kopi Senja"
                  width={300}
                  height={300}
                />
              </div>
              <p className="text-grey font-bold text-lg">
                Visi Kopi Senja adalah menjadi kafe terbaik di kota ini dan
                memberikan layanan yang baik bagi pelanggan. Kami berkomitmen
                untuk menggunakan bahan-bahan berkualitas tinggi. Kafe kami
                didesain dengan suasana yang hangat dan nyaman, dengan musik
                yang menenangkan. Kami memiliki beberapa tempat duduk yang cocok
                untuk bersantai.
              </p>
            </div>
          </div>
        </div>
        <div className="px-16 py-8 space-y-16">
          <Image
            src="assets/svg/menu-line.svg"
            alt="Kopi Senja"
            width={1179}
            height={28}
            className="w-full"
          />
          <div className="overflow-x-auto flex gap-8 pb-12">
            {homeMenuData.map((data) => (
              <MenuCard
                key={data.id}
                id={data.id}
                url={data.url}
                img={data.img}
                name={data.name}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
