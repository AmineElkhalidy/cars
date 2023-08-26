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

const SearchBar = () => {
  const [manufacturar, setManufacturar] = useState("");
  const [modal, setModal] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturar === "" && modal === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(modal.toLowerCase(), manufacturar.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturar: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturar) {
      searchParams.set("manufacturar", manufacturar);
    } else {
      searchParams.delete("manufacturar");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturar
          manufacturar={manufacturar}
          setManufacturar={setManufacturar}
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
          value={modal}
          onChange={(e) => setModal(e.target.value)}
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
