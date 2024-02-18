"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      void router.push(`/search?q=${searchText}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        className="relative inline-block h-[25px] w-[325px] max-w-full whitespace-nowrap bg-[transparent] text-left font-lexend text-xl text-white [border:none] [outline:none]"
        placeholder="Search for albums, artists, users..."
        type="text"
        value={searchText}
        onChange={handleInputChange}
        onKeyUp={handleSearch}
      />
    </div>
  );
};
