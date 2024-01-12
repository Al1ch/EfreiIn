"use client";
// @ts-nocheck
// @react-client
import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./page.module.scss";
// @react-client
import ParentComponent from "@/components/ParentComponent"; // Check if ParentComponent uses useEffect

// @react-client
import EntrepriseCard from "@/components/EntrepriseCard/EntrepriseCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterDropDown from "@/components/FilterDropDown/FilterDropDown";

export default function EntreprisePage() {
    const [entrepriseData, setEntrepriseData] = useState([]);

    useEffect(() => {
        // Fonction pour effectuer la requête à l'API Monday.com
        async function fetchMondayData() {
        try {
            const response = await fetch("https://api.monday.com/v2", {
            method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwOTYyODQ2MywiYWFpIjoxMSwidWlkIjo1NDI5MjE5OCwiaWFkIjoiMjAyNC0wMS0xMlQwOTowNTowNy4yOTNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjA3MTA2MDUsInJnbiI6ImV1YzEifQ.Uwpi4ASIpksw4t2rVpOIgQpkbINC981CKyz0W9zbKV8'
                },
                body: JSON.stringify({
                'query': 'query { boards (ids: 1363523728) { name state id permissions }}'
            })
        });

        const boards = response.data.boards;
        setEntrepriseData(boards);

        } catch (error) {
            console.error('Erreur lors de la requête à l\'API Monday.com', error.message);
            // Affichez le message d'erreur complet dans la console
            if (error.response) {
                console.error('Réponse de l\'API:', error.response.data);
                console.error('Statut de la réponse:', error.response.status);
            } else if (error.request) {
                console.error('Aucune réponse reçue de l\'API');
            } else {
            console.error('Erreur lors de la configuration de la requête', error.message);
            }
        }
      }

        // Appel de la fonction
      fetchMondayData();
    }, []); // Le tableau vide en second argument signifie que useEffect s'exécutera une seule fois après le montage du composant

    return (
        <div className={styles.container}>
          <div className={styles.researchFilter}>
            <SearchBar />
            <FilterDropDown
                title="Secteur"
                options={["Banque", "Assurance", "Finance"]}
            />
            <FilterDropDown
            title="Secteur"
            options={["Banque", "Assurance", "Finance"]}
            />
            <FilterDropDown
            title="Secteur"
            options={["Banque", "Assurance", "Finance"]}
            />
        </div>

        <div className={styles.cardListContainer}>
            {entrepriseData.map((entreprise) => (
            <EntrepriseCard
                key={entreprise.id}  // Assurez-vous d'avoir une propriété unique comme "id" dans votre objet entreprise
                banner={entreprise.banner}  // Assurez-vous que les noms de propriétés correspondent à celles renvoyées par l'API Monday.com
                logo={entreprise.logo}
                name={entreprise.name}
                sector={entreprise.sector}
                location={entreprise.location}
                size={entreprise.size}
            />
            ))}
        </div>
    </div>
    );
}
