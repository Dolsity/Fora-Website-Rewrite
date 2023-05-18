import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../../assets/logo.png';


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        
        <a href="#" className={styles.navbar_logo}>
          <img src={Logo} alt="Logo" />
          Fora
        </a>

        <ul className={styles.navbar_menu}>
          <li className={styles.navbar_item}>
            <a href="#" className={styles.navbar_links}>Login</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}