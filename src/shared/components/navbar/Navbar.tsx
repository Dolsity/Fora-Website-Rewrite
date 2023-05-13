import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        
        <a href="#" className={styles.navbar_logo}>
          <img src="/static/img/logo.png" alt="Logo" />
          Fora
        </a>

        <div className={styles.navbar_toggle} id={styles.mobile_menu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <ul className={styles.navbar_menu}>
          <li className={styles.navbar_item}>
            <a href="#" className={styles.navbar_links}>Home</a>    
          </li>
        </ul>


      </div>
    </nav>
  );
}