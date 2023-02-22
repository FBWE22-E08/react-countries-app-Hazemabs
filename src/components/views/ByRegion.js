import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard";
 //save the user input in the pre-made local state (region), then fetch all countries of that region on page load and make sure it gets executed every time the state (region) changes (what hook should you use for that? and what should you add to it?) then save the received array of countries in a local state (call it countries)

export default function ByRegion() {
 
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("Africa");

  useEffect(() => {
    fetch(`https://restcountries.com/v2/region/${region}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [region]);

  const handleChange = (e) => {
    setRegion(e.target.value)
 
  };

  return (
    <div>
      <input
        type={"radio"}
        name="region"
        defaultChecked
        value="Africa"
        onChange={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Africa</label>
      <input
        type={"radio"}
        name="region"
        value="Americas"
        onChange={handleChange}
      />
      <label style={{ marginRight: "15px" }}>America</label>
      <input
        type={"radio"}
        name="region"
        value="Asia"
        onChange={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Asia</label>
      <input
        type={"radio"}
        name="region"
        value="Europe"
        onChange={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Europe</label>
      <input
        type={"radio"}
        name="region"
        value="Oceania"
        onChange={handleChange}
      />
      <label>Oceania</label>

      <div className="cardsContainer">
        {countries.map((item, i) => (
          <CountryCard key={i} country={item} />
        ))}
        {/* show the countries you received from fetch and saved in the local state (use CountryCard component to display each individual one) */}
      </div>
    </div>
  );
}
