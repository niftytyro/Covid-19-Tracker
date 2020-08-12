import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const generateDataset = (countriesData) => {
  const labels = [];
  const datapoints = [];
  for (let key in countriesData["cases"]) {
    //   console.log(key);
    //   console.log(countriesData["cases"][key]);
    labels.push(key);
    datapoints.push(countriesData["cases"][key]);
  }
  return [labels, datapoints];
};

function Graph({ countryCode }) {
  const [labels, setLabels] = useState([]);
  const [datapoints, setDatapoints] = useState([]);
  useEffect(() => {
    (async () => {
      const url =
        countryCode === "worldwide"
          ? "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
          : `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=120`;
      console.log(url);
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const [newLabels, newDatapoints] = generateDataset(data);
          setLabels(newLabels);
          setDatapoints(newDatapoints);
        });
    })();
  }, [countryCode]);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Coronavirus Cases",
        // fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        // borderCapStyle: "butt",
        // borderDash: [],
        // borderDashOffset: 0.0,
        // borderJoinStyle: "miter",
        // pointBorderColor: "rgba(75,192,192,1)",
        // pointBackgroundColor: "#fff",
        // pointBorderWidth: 0,
        // pointHoverRadius: 5,
        // pointHoverBackgroundColor: "rgba(75,192,192,1)",
        // pointHoverBorderColor: "rgba(220,220,220,1)",
        // pointHoverBorderWidth: 2,
        pointRadius: 0,
        // pointHitRadius: 10,
        data: datapoints,
      },
    ],
  };
  return <Line data={data} />;
}

export default Graph;
