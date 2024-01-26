"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";
import efreiLogo from "@/assets/images/efreiImage.png";
import efreiBackground from "@/assets/images/EfreiLogin.jpg";
import Link from "next/link";

export default function Login() {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.loginContent}>
          <Image src={efreiLogo} width={215} height={70} alt="efreiLogo" />
          <div className={styles.authArea}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Connexion</h1>
              <h2 className={styles.underTitle}>Utiliser votre compte Efrei</h2>
            </div>
            <form
              ref={formRef}
              onSubmit={(e) => e.preventDefault()}
              className={styles.formContainer}
            >
              <div className={styles.inputContainer}>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
                <label className={styles.label} htmlFor="email">
                  Identifiant ou n° de dossier
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  name="passwordInput"
                />
                <label className={styles.label} htmlFor="passwordInput">
                  Mot de passe
                </label>
              </div>
            </form>
            <Link className={styles.link} href={""}>
              {" "}
              Identifiants oublié
            </Link>
            <div className={styles.description}>
              <p>
                En me connectant, <span className={styles.bold}>j'accepte</span>{" "}
                <span className={styles.underline}>
                  les conditions d'utilisations{" "}
                </span>{" "}
                du service SSO Efrei notamment en matière de données
                personnelles
              </p>
            </div>
          </div>
          <Button size="md" type="submit" backgroundColor="blue">
            <span className={styles.labelButton}> SE CONNECTER</span>
          </Button>
        </div>
      </div>
      <Image
        src={efreiBackground}
        alt="efreiLogo"
        className={styles.backgroundImage}
      />
    </div>
  );
}
