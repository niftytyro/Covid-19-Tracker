import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./RankedTable.module.css";

function RankedTable({ countriesList }) {
  return (
    <div className={styles.tableContainer}>
      <Typography className={styles.header} variant="h5" color="textSecondary">
        Live Cases by Country
      </Typography>
      <table>
        {countriesList.map((country) => {
          return (
            <tr>
              <td>{country.country}</td>
              <td>{country.cases}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default RankedTable;
