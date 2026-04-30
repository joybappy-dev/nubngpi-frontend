import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="text-white">
        {/* 🌌 Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Image */}
          <Image
            src="/bg.png"
            alt="background"
            fill
            priority
            className="object-cover scale-110 blur-sm"
          />

          {/* 🔥 Strong overlay (fix low quality) */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* 🟢 Green gradient glow */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-black/60 to-emerald-900/40"></div> */}

          {/* ✨ Optional noise texture (premium feel) */}
          {/* <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('/noise.png')]"></div> */}
        </div>

        <Navbar />

        {/* 📱 Page Wrapper */}
        <main className="md:px-0 px-2">{children}</main>
      </body>
    </html>
  );
}
