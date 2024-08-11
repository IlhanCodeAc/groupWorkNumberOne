import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./index.module.scss"
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.head}>
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt=""
          />
          <ul>
            <li>
              <Link className={styles.link} to="/">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/productos">
                Products
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/ventas">
                Ventas
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.icons}>
          <VscAccount
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
}

export default Header
