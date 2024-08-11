import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./index.module.scss"
const Header = () => {
  return (
    <div className={styles.header}> 
      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/productos'>Products</Link>
        </li>
        <li>
          <Link to='/ventas'>Ventas</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header
