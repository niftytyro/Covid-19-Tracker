import React, { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import CardsRow from "./Components/CardsRow/CardsRow";
import RankedTable from "./Components/RankedTable/RankedTable";
import Graph from "./Components/Graph/Graph";
import CovidMap from "./Components/CovidMap/CovidMap";
import { KsortByCases } from "./utils";

const App = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("worldwide");
  const [selectedCountryData, setSelectedCountryData] = useState({});
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

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
          if (data.countryInfo) {
            console.log(data.countryInfo.lat, data.countryInfo.long);
            setLat(data.countryInfo.lat);
            setLong(data.countryInfo.long);
          } else {
            setLat(0);
            setLong(0);
          }
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
              deaths: country.deaths,
              recovered: country.recovered,
              lat: country.countryInfo.lat,
              long: country.countryInfo.long,
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
        <CovidMap
          latitude={lat}
          longitude={long}
          countriesData={countriesList}
        />
      </div>
      <div className="app__right">
        <RankedTable countriesList={KsortByCases(countriesList)} />
        <Graph countryCode={selectedCountry} />
      </div>
    </div>
  );
};

export default App;
