import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchRoll from "../SearchRoll/SearchRoll";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-2">
        {/* 🎓 Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            width={48} // ⚡ Match the w-12 size (48px)
            height={48}
            src="/nasir-logo.png"
            alt="NUBNGPI Logo"
            priority // 🚀 Fixes the LCP warning (replaces loading="eager")
            className="w-12 h-12 md:w-14 md:h-14 object-cover border border-white/20 rounded-full group-hover:scale-105 transition-transform"
          />
        </Link>

        <SearchRoll />
      </div>
    </nav>
  );
};

export default Navbar;
