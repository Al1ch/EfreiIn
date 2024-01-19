// Home.js

        import React from "react";
        import Link from "next/link";
        import styles from "./page.module.scss";

        export default function Home() {
        return (
<main className={styles.main}>
<div className={styles.container}>
<h1>Bienvenue sur notre Plateforme</h1>
<p>
Connectez-vous avec des partenaires et la communauté Efrei. Rassemblez
et partagez vos données de manière efficace.
</p>
<Link href="/analyse" passHref>
<button className={styles.ctaButton}>Commencer</button>
        </Link>
        </div>
        </main>
        );
        }
