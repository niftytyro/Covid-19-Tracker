import React, { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import CardsRow from "./Components/CardsRow/CardsRow";
import RankedTable from "./Components/RankedTable/RankedTable";

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("worldwide");
  const [selectedCountryData, setSelectedCountryData] = useState({});

  useEffect(() => {
    (async () => {
      const url =
        selectedCountry === "worldwide"
          ? "https://disease.sh/v3/covid-19/all"
          : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSelectedCountryData(data);
        });
    })();
  }, [selectedCountry]);

  useEffect(() => {
    (async () => {
      const url = "https://disease.sh/v3/covid-19/countries";

      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => {
            return {
              country: country.country,
              countryCode: country.countryInfo.iso2,
              cases: country.cases,
            };
          });
          setCountriesList(countries);
        });
    })();
  }, []);

  const changeCountry = (event) => {
    const newCountry = event.target.value;
    setSelectedCountry(newCountry);
  };

  return (
    <div className="app">
      <div className="app__left">
        <AppHeader
          selectedCountry={selectedCountry}
          handleDropdownSelect={changeCountry}
          countriesList={countriesList}
        />
        <CardsRow countryData={selectedCountryData} />
      </div>
      <div className="app__right">
        <RankedTable countriesList={countriesList} />
      </div>
    </div>
  );
}

export default App;
