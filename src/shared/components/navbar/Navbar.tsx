import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../../assets/logo.png';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <a href="#" className={styles.navbar_logo}><img src={Logo} alt="Logo" />Fora</a>
        <div className={styles.navbar_toggle}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={styles.navbar_menu}>
          <li className={styles.navbar_item}>
            <a href="#" className={styles.navbar_links}>Home</a>
          </li>
          <li className={styles.navbar_item}>
            <a href="#" className={styles.navbar_links}>Dashboard</a>
          </li>
          <li className={styles.navbar_item}>
            <a href="#" className={styles.navbar_links}>Commands</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}