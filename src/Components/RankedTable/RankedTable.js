import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./RankedTable.module.css";

function RankedTable({ countriesList }) {
  return (
    <div className={styles.tableContainer}>
      <Typography className={styles.header} variant="h5" color="textSecondary">
        Live Cases by Country
      </Typography>
      <div className={styles.table}>
        {countriesList.map((country, index) => {
          return (
            <tr key={index}>
              <td>{country.country}</td>
              <td>{country.cases}</td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}

export default RankedTable;
