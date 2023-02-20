import React, { useState, useEffect } from "react";
import CountryCard from "../CountryCard";

export default function AllCountries() {
  // fetch all countries on page load (what hook should you use for that?) then save the received array of countries in a local state (call it countries)

  return (
    <div className="cardsContainer">
      {/* show the countries you received from fetch and saved in the local state (use CountryCard component to display each individual one) */}
    </div>
  );
}
