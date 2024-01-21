// pages/analyse.tsx
        "use client";

        import React, { useEffect, useState } from 'react';
        import { Bar, Line, Doughnut } from 'react-chartjs-2';
        import { CategoryScale, LinearScale, Chart, registerables, LineController,Title } from 'chart.js';
        import 'chartjs-plugin-datalabels';

        Chart.register(...registerables);
        Chart.register(CategoryScale as any, LinearScale as any);
        Chart.register('line', LineController as any);


        interface EntrepriseData {
        name: string;
        effectif: number;
        }

        console.log("HELLO");

        const Analyse: React.FC = () => {
        console.log("analyse");
        const [entrepriseData, setEntrepriseData] = useState<EntrepriseData[]>([]);

        useEffect(() => {
        console.log("Useeffect");
        async function fetchData() {
        try {
        const response = await fetch("https://api.monday.com/v2", {
        method: 'post',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwOTYyODQ2MywiYWFpIjoxMSwidWlkIjo1NDI5MjE5OCwiaWFkIjoiMjAyNC0wMS0xMlQwOTowNTowNy4yOTNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjA3MTA2MDUsInJnbiI6ImV1YzEifQ.Uwpi4ASIpksw4t2rVpOIgQpkbINC981CKyz0W9zbKV8'
        },
        body: JSON.stringify({
        'query': 'query { boards (ids: 1363523728) { name columns { title id type } items { name group { id } column_values { id value text } } } }'
        })
        });

        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);

        const boardItems = data.data.boards[0].items;
        setEntrepriseData(boardItems);
        console.log('Board:', boardItems);

        } catch (error) {
        console.error('Error:', error);
        }
        }

        fetchData();
        }, []);

        const labels = entrepriseData.map((data) => data.name);
        console.log(entrepriseData);

        const dataValues = entrepriseData.map((data) => {
        const value = parseInt(data.column_values[2].value.replace(/"/g, ''), 10);
        return isNaN(value) ? 0 : value;
        });

        const data = {
        labels: labels,
        datasets: [
        {
        label: 'Effectif',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        },
        ],
        };


        const taxeApprentissage = entrepriseData.map((data) => {
        const value = parseFloat(data.column_values[6].value.replace(/"/g, ''));
        return isNaN(value) ? 0 : value;
        });
        console.log(taxeApprentissage)


        const taxeApprentissageChart = {
        labels: labels,
        datasets: [
        {
        label: 'Taxe d\'apprentissage',
        data: taxeApprentissage,
        backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        // Ajoutez plus de couleurs si nécessaire
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 205, 86, 1)',
        // Ajoutez plus de couleurs si nécessaire
        ],
        borderWidth: 1,
        },
        ],
        };

        const totalCost = taxeApprentissage.reduce((acc, value) => acc + value, 0);
        console.log("totalCost",totalCost)


        const doughnutOptions = {
        plugins: {
        datalabels: {
        color: 'white',
        font: {
        weight: 'bold',
        size: 16,
        },
        formatter: (value, context) => {
        return `Coût Total\n${totalCost}`;
        },
        },
        },
        };
        return (
<div>
<h1>Graphiques d'analyse</h1>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<div style={{ width: '30%' }}>
<h2>Graphique d'Effectif</h2>
<Bar data={data} />
</div>
<div style={{ width: '30%' }}>
<h2>Graphique taxe d'apprentissage</h2>
<Doughnut options={doughnutOptions} data={taxeApprentissageChart}  />
        </div>
<div style={{ width: '30%' }}>
        </div>
        </div>
        </div>
        );
        };

        export default Analyse;
