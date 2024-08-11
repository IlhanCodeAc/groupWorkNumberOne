import React from 'react'
import styles from "./index.module.scss"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Short links</h3>
      <ul className={styles["footer-list"]}>
        <Link className={styles.link} to="dashboard">Dashboard</Link>
        <Link className={styles.link} to="productos">Products</Link>
        <Link className={styles.link} to="ventas">Ventas</Link>
      </ul>
    </footer>
  );
};

export default Footer;