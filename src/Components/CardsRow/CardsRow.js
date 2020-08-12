import React from "react";
import styles from "./CardsRow.module.css";
import InfoCard from "../InfoCard/InfoCard";
import { KformatLargeNumbers } from "../../utils";

function CardsRow({ countryData }) {
  return (
    <div className={styles.row}>
      <InfoCard
        title="Coronavirus Cases"
        color="#ff3333"
        casesToday={"+" + KformatLargeNumbers(countryData.todayCases)}
        totalCases={KformatLargeNumbers(countryData.cases) + " Total"}
      />
      <InfoCard
        title="Recovered"
        color="#55cc55"
        casesToday={"+" + KformatLargeNumbers(countryData.todayRecovered)}
        totalCases={KformatLargeNumbers(countryData.recovered) + " Total"}
      />
      <InfoCard
        title="Deaths"
        color="#ff3333"
        casesToday={"+" + KformatLargeNumbers(countryData.todayDeaths)}
        totalCases={KformatLargeNumbers(countryData.deaths) + " Total"}
      />
      <InfoCard
        title="Tests"
        color="#55cc55"
        casesToday={KformatLargeNumbers(countryData.tests)}
        // totalCases={countryData.tests}
      />
    </div>
  );
}

export default CardsRow;
