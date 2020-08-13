import React from "react";
import { Select, FormControl, MenuItem } from "@material-ui/core";
import styles from "./AppHeader.module.css";
import { CSSTransitionGroup } from "react-transition-group";

const AppHeader = ({
  selectedCountry,
  handleDropdownSelect,
  countriesList,
}) => {
  return (
    <div className={styles.app__header}>
      <CSSTransitionGroup
        transitionName="slideUp"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <h1>Covid-19 Tracker</h1>
      </CSSTransitionGroup>
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
};

export default AppHeader;
