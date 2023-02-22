import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OneCountry() {
  const { code } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, [code]);

  return (
    <div>
      {country && (
        <div>
          <img src={country.flag} alt={country.name} width="50%" />
          <h1>{country.name}</h1>
          <span>
            <b>Capital:</b> {country.capital}
          </span>
          <br />
          <span>
            <b> Area:</b> {country.area} km<sup>2</sup>
          </span>
          <br />
          <span>
            <b>Population:</b> {country.population}
          </span>
          <br />
          <span>
            <b>Region:</b> {country.region}
          </span>
          <br />
          <span>
            <b>Languages:</b>
            {country.languages.map((x) => (
              <span> {x.name} </span>
            ))}
          </span>
          <br />
          <span>
            <b>Currencies:</b>
            {country.currencies.map((x) => (
              <span> {x.name} </span>
            ))}
          </span>
          <br />
          <span>
            <b>Native name:</b> {country.nativeName}
          </span>
          <br />
        </div>
      )}
    </div>
  );
}
