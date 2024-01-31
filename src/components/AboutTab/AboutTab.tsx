import React, { useEffect, useRef } from "react";
import styles from "./AboutTab.module.scss";
import Link from "next/link";
import Chart, { ChartItem } from "chart.js/auto";

// const AboutTab = () => {
const AboutTab: React.FC<{ data: any }> = ({ data }) => {
  function normalizeData(numbers: string[]): number[] {
    const numericValues = numbers.map((num) => parseFloat(num));

    const minValue = Math.min(...numericValues);
    const maxValue = Math.max(...numericValues);

    const normalizedAndRounded = numericValues.map((value) => {
      const normalized = ((value - minValue) / (maxValue - minValue)) * 4 + 1;
      const rounded = Math.round(normalized * 2) / 2; // Round to the nearest 0.5
      return normalized;
    });

    return normalizedAndRounded;
  }

  function addZeroAfterEachNumber(numbers: number[]): number[] {
    const result: number[] = [];

    for (const num of numbers) {
      result.push(num, 0);
    }

    return result;
  }

  const radarChartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (radarChartRef.current) {
      const ctx = radarChartRef.current.getContext("2d");

      // Destroy existing chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Extract the relevant data for the radar chart
      // Normalize data
      const normalizedData = normalizeData([
        // data.column_values[1].text,     // effectif (chiffre trop grande => bye)
        // data.column_values[5].text,     // tax d'apprentissage (chiffre trop grande => bye)
        data.column_values[6].text, // nb stagiaires
        data.column_values[7].text, // nb alternants
        data.column_values[8].text, // nb alumnis
        data.column_values[9].text, // nb actions realisees
      ]);

      const normalizedDataWithZeros = addZeroAfterEachNumber(normalizedData);

      const radarChartData = {
        labels: [
          "Nombre de stagiaires",
          "",
          "Nombre d'alternants",
          "",
          "Nombre d'alumnis",
          "",
          "Nombre d'actions réalisées",
          "",
        ],
        datasets: [
          {
            label: "Radar Chart",
            data: normalizedDataWithZeros.map((n) => (n === 0 ? null : n)),
            // data: [1,6,4,2,5,3],
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      };

      // Create new chart instance
      chartInstanceRef.current = new Chart(ctx as ChartItem, {
        type: "radar",
        data: radarChartData,
        options: {
          spanGaps: true,
          scales: {
            r: {
              min: 0,
              max: 5,
              ticks: {
                stepSize: 1,
                display: false,
              },
            },
          },
        },
      });
    }
  }, [data.column_values]);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}> Présentation</h2>
      <div className={styles.contentContainer}>
        <p
          className={styles.description}
        >{data.column_values[16].text}</p>
        <div className={styles.websiteSection}>
          <h3 className={styles.titleInfo}>Site web</h3>
          <Link href={data.column_values[14].text} className={styles.link}>
            {data.column_values[14].text}
          </Link>
        </div>
        <div className={styles.sectorSection}>
          <h3 className={styles.titleInfo}>Sector</h3>
          <span className={styles.text}>{data.column_values[1].text}</span>
        </div>
        <div className={styles.sizeSection}>
          <h3 className={styles.titleInfo}>{"Taille de l'entreprise"}</h3>
          <span className={styles.text}>
            {data.column_values[1].text} employés
          </span>
        </div>
      </div>

      {/* Show radar chart here */}
      <div className={styles.chartContainer}>
        <canvas ref={radarChartRef}></canvas>
      </div>
    </div>
  );
};

export default AboutTab;
