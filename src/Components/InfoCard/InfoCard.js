import React from "react";
import styles from "./InfoCard.module.css";
import { Card, CardContent, Typography } from "@material-ui/core";

const InfoCard = ({ title, color, casesToday, totalCases }) => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <Typography style={{ color: color }} variant="h3">
          {casesToday}
        </Typography>
        <Typography color="textSecondary">{totalCases}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
