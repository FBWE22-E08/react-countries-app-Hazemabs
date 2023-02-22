import React, { useState } from "react";
import SearchResult from "../SearchResult";

export default function ByName() {
  const [searchInput, setSearchInput] = useState("");
  const [country, setCountry] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v2/name/${searchInput}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <input type="text" onChange={handleChange} />
        <button>search</button>
      </form>
      {country.map((item)=><SearchResult country={item} />) }
    </div>
  );
}
