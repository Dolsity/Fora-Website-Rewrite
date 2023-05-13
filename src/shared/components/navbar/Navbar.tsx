import React from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        
        <a href="#" className={styles.navbar_logo}>
          <img src="./" alt="Logo" />
          Fora
        </a>

        <ul className={styles.navbar_menu}>
          <li className={styles.navbar_item}>
            <a href="#" className={styles.navbar_links}>Home</a> 
            <a href="#" className={styles.navbar_links}>Dashboard</a>  
            <a href="#" className={styles.navbar_links}>Commands</a>
            <a href="#" className={styles.navbar_links}>Login</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}