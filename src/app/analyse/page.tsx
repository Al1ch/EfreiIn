// pages/analyse.tsx
        "use client";

        import React, { useEffect, useState } from 'react';
        import { Bar } from 'react-chartjs-2';
        import { CategoryScale, Chart, registerables } from "chart.js";

        Chart.register(...registerables);
        Chart.register(CategoryScale as any);

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


        console.log("dataValues");
        console.log(dataValues);

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

        return (
<div>
<h1>Graphique d'analyse</h1>
<Bar data={data} />
</div>
        );
        };

        export default Analyse;
