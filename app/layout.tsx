import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata = {
  title: "Kopi Senja",
  description: "Kopi Senja website built with Next.js",
};

const jakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakartaSans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakartaSans.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
