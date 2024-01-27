// pages/analyse.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Bar, Line, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  Chart,
  registerables,
  LineController,
  Title,
} from "chart.js";
import "chartjs-plugin-datalabels";
import Select from "react-select";
import "chartjs-plugin-datalabels";
Chart.register(...registerables);
Chart.register(CategoryScale as any, LinearScale as any);
Chart.register("line", LineController as any);

interface EntrepriseData {
  name: string;
  effectif: number;
  apprentis: number;
  stagiaires: number;
  alumnis: number;
}

const Analyse: React.FC = () => {
  const [showEffectif, setShowEffectif] = useState(true);
  const [entrepriseData, setEntrepriseData] = useState<EntrepriseData[]>([]);
  const [selectedGraphs, setSelectedGraphs] = useState<string[]>([]);
  const graphOptions = ["Effectif", "Taxe d'apprentissage", "Evenement"];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.monday.com/v2", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwOTYyODQ2MywiYWFpIjoxMSwidWlkIjo1NDI5MjE5OCwiaWFkIjoiMjAyNC0wMS0xMlQwOTowNTowNy4yOTNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjA3MTA2MDUsInJnbiI6ImV1YzEifQ.Uwpi4ASIpksw4t2rVpOIgQpkbINC981CKyz0W9zbKV8",
          },
          body: JSON.stringify({
            query:
              "query { boards (ids: 1363523728) { name columns { title id type } items_page { items { name group { id } column_values { id value text } } } } }",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        const boardItems = data.data.boards[0].items_page.items;
        setEntrepriseData(boardItems);
        console.log("Board:", boardItems);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  const labels = entrepriseData.map((data) => data.name);
  console.log(entrepriseData);

  const effectif = entrepriseData.map((data) => {
    const value = parseInt(data.column_values[2].value.replace(/"/g, ""), 10);
    return isNaN(value) ? 0 : value;
  });

  const stagiaires = entrepriseData.map((data) => {
    const value = parseInt(data.column_values[7].value.replace(/"/g, ""), 10);
    return isNaN(value) ? 0 : value;
  });

  const apprentis = entrepriseData.map((data) => {
    const value = parseInt(data.column_values[8].value.replace(/"/g, ""), 10);
    return isNaN(value) ? 0 : value;
  });

  const alumnis = entrepriseData.map((data) => {
    const value = parseInt(data.column_values[9].value.replace(/"/g, ""), 10);
    return isNaN(value) ? 0 : value;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Effectif",
        data: effectif,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Apprentis",
        data: apprentis,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Stagiaires",
        data: stagiaires,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Alumnis",
        data: alumnis,
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  const taxeApprentissage = entrepriseData.map((data) => {
    const value = parseFloat(data.column_values[6].value.replace(/"/g, ""));
    return isNaN(value) ? 0 : value;
  });
  console.log(taxeApprentissage);

  const backgroundColors = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 205, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(255, 0, 0, 0.5)",
    "rgba(0, 255, 0, 0.5)",
    "rgba(0, 0, 255, 0.5)",
    "rgba(128, 0, 128, 0.5)",
    "rgba(255, 165, 0, 0.5)",
    "rgba(0, 128, 128, 0.5)",
    "rgba(128, 128, 0, 0.5)",
    "rgba(128, 0, 0, 0.5)",
    "rgba(0, 128, 0, 0.5)",
    "rgba(0, 0, 128, 0.5)",
    "rgba(255, 0, 255, 0.5)",
    "rgba(255, 255, 0, 0.5)",
    "rgba(0, 255, 255, 0.5)",
    "rgba(192, 192, 192, 0.5)",
    "rgba(128, 128, 128, 0.5)",
    "rgba(64, 64, 64, 0.5)",
    "rgba(255, 99, 71, 0.5)",
    "rgba(0, 139, 139, 0.5)",
    "rgba(0, 0, 139, 0.5)",
    "rgba(139, 0, 0, 0.5)",
    "rgba(0, 250, 154, 0.5)",
    "rgba(178, 34, 34, 0.5)",
    "rgba(173, 216, 230, 0.5)",
  ];

  const taxeApprentissageChart = {
    labels: labels,
    datasets: [
      {
        label: "Taxe d'apprentissage",
        data: taxeApprentissage,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };
  const totalCost = taxeApprentissage.reduce((acc, value) => {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? acc : acc + parsedValue;
  }, 0);

  const selectOptions = [
    { value: "Effectif", label: "Graphique d'Effectif" },
    { value: "TaxeApprentissage", label: "Graphique de Taxe d'apprentissage" },
    { value: "Evenement", label: "Types d'evenements" },
  ];

  const handleGraphChange = (selectedOptions: any) => {
    setSelectedGraphs(selectedOptions.map((option: any) => option.value));
  };

  const doughnutOptions = {
    plugins: {
      // Retirez le bloc de datalabels
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          size: 12,
        },
      },
    },
    cutout: "45%",
  };

  const actionNumber = entrepriseData.map((data) => {
    const value = parseInt(data.column_values[10].value.replace(/"/g, ""), 10);
    console.log("VALUE:", data.column_values[10].value);
    return isNaN(value) ? 0 : value;
  });

  // Fonction pour regrouper les données par type d'événement
  const groupDataByEventType = () => {
    const groupedData = new Map();

    entrepriseData.forEach((data) => {
      const eventType = data.column_values[11].text;
      const eventValue = parseInt(
        data.column_values[10].value.replace(/"/g, ""),
        10
      );

      if (groupedData.has(eventType)) {
        groupedData.set(eventType, groupedData.get(eventType) + eventValue);
      } else {
        groupedData.set(eventType, eventValue);
      }
    });

    return {
      labels: Array.from(groupedData.keys()),
      data: Array.from(groupedData.values()),
    };
  };

  const groupedData = groupDataByEventType();

  const actionsData = {
    labels: groupedData.labels,
    datasets: [
      {
        label: "Nombre d'actions",
        data: groupedData.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(144, 238, 144, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(144, 238, 144, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Tableau de Bord d'Analyse</h1>
      <label>Sélectionnez les graphiques à afficher:</label>
      <Select options={selectOptions} isMulti onChange={handleGraphChange} />
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {selectedGraphs.includes("Effectif") && (
            <div style={{ width: "60%" }}>
              <h2>Graphique d'Effectif</h2>
              <Bar data={data} />
            </div>
          )}
          {selectedGraphs.includes("TaxeApprentissage") && (
            <div style={{ width: "40%" }}>
              <h2>Graphique de Taxe d'apprentissage</h2>
              <Doughnut
                options={doughnutOptions}
                data={taxeApprentissageChart}
              />
            </div>
          )}
        </div>
        {selectedGraphs.includes("Evenement") && (
          <div style={{ width: "50%", marginTop: "20px" }}>
            <h2>Graphique des Actions par Type de Visite</h2>
            <PolarArea data={actionsData} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyse;
