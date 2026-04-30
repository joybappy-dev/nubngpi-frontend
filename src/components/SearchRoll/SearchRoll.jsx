"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchRoll = () => {
  const [roll, setRoll] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (roll.trim()) {
      console.log(roll);
    }
  };

  return (
    <>
      {/* 🔍 Roll Number Search Input */}
      <form
        onSubmit={handleSearch}
        className="relative flex items-center w-full max-w-50 sm:max-w-xs ml-4"
      >
        <input
          type="number"
          placeholder="Search Roll..."
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="w-full bg-black/20 border border-white/20 rounded-xl py-2 pl-4 pr-10 
                       text-sm text-white placeholder:text-white/40 focus:outline-none 
                       focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
        />
        <button
          type="submit"
          className="absolute cursor-pointer right-3 text-white/60 hover:text-green-500 transition-colors"
        >
          <Search size={21} />
        </button>
      </form>
    </>
  );
};

export default SearchRoll;
