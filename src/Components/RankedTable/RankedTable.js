import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./RankedTable.module.css";
import { KformatWithComma } from "../../utils";
import { CSSTransitionGroup } from "react-transition-group";

const RankedTable = ({ countriesList }) => {
  return (
    <div className={styles.tableContainer}>
      <Typography className={styles.header} variant="h5" color="textSecondary">
        Live Cases by Country
      </Typography>
      <div className={styles.table}>
        {countriesList.map((country, index) => {
          return (
            <tr key={index}>
              <CSSTransitionGroup
                transitionName="slideUpLittle"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
              >
                <td>{country.country}</td>
                <td>{KformatWithComma(country.cases)}</td>
              </CSSTransitionGroup>
            </tr>
          );
        })}
      </div>
    </div>
  );
};

export default RankedTable;
