import React, { useState } from "react";

const LocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    //search bar container
    <div className="flex justify-center items-center p-2 xl:w-fit rounded-lg ">
      <img src="/img/svg/search-icon.svg" alt="search" className="w-6" />
      <form className="w-9/12">
        <input
          type="text"
          name="searchBar"
          className="mx-2 px-2 py-2 w-11/12 "
          placeholder="Search for places ..."
        />
      </form>
      <img
        src="/img/svg/find-me-icon.svg"
        alt="find me"
        className="w-10 bg-slate-300 p-2 rounded-full"
      />
    </div>
  );
};

export default LocationSearch;
