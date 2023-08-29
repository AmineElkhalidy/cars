"use client";

import React, { useState } from "react";
import { SearchManufacturar } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = ({ setManufacturar, setModel }) => {
  const [searchManufacturar, setSearchManufacturar] = useState("");
  const [searchModal, setSearchModal] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturar === "" && searchModal === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModal.toLowerCase());
    setManufacturar(searchManufacturar.toLowerCase());
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturar
          selected={searchManufacturar}
          setSelected={setSearchManufacturar}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Car Modal"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
        />

        <input
          type="text"
          name="modal"
          value={searchModal}
          onChange={(e) => setSearchModal(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
