import React from "react";
import { Select, FormControl, MenuItem } from "@material-ui/core";
import styles from "./AppHeader.module.css";

function AppHeader({ selectedCountry, handleDropdownSelect, countriesList }) {
  return (
    <div className={styles.app__header}>
      <h1>COVID-19 TRACKER</h1>
      <FormControl>
        <Select
          className={styles.app__dropdown}
          variant="outlined"
          value={selectedCountry}
          onChange={handleDropdownSelect}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countriesList.map((country, index) => {
            return (
              <MenuItem value={country.countryCode} key={index}>
                {country.country}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default AppHeader;
