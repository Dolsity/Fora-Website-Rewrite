import styles from './Footer.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_links}>
            <div className={styles.footer_link_wrapper}>
                <div className={styles.footer_link_items}>
                    <h2>Support</h2>
                    <a target="_blank" rel="nofollow noopener" href="#">Support Server</a>
                </div>
            </div>
            <div className={styles.footer_link_wrapper}>
                <div className={styles.footer_link_items}>
                    <h2>Other Links</h2>
                    <a rel="nofollow noopener" href="#">Commands</a>
                    <a rel="nofollow noopener" href="#">Rules</a>
                </div>
            </div>
        </div>
        <section className={styles.social_media}>
            <div className={styles.social_media_wrap}>
                <div className={styles.footer_logo}>
                    <a href="/">FORA</a>
                </div>
                <p>Fora © 2023</p>
                <div className={styles.social_icons}>
                    <a href="#" target="_blank" rel="nofollow noopener" className={styles.social_icon_link} aria-label="discord">
                        <i className="fab fa-discord"></i>
                    </a>
                    <a href="https://www.instagram.com/dolsity/?hl=en" target="_blank" rel="nofollow noopener" className={styles.social_icon_link} aria-label="instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="nofollow noopener" className={styles.social_icon_link} aria-label="github">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    </footer>
  );
}