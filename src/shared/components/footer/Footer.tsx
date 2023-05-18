import styles from './Footer.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../../../assets/logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_links}>
            <div className={styles.footer_link_wrapper}>
                <div className={styles.footer_link_items}>
                    <h2>Fora</h2>
                    <a target="_blank" rel="nofollow noopener" href="#">Invite Fora</a>
                    <a target="_blank" rel="nofollow noopener" href="#">Invite Premium</a>
                    <a target="_blank" rel="nofollow noopener" href="#">Terms of Service</a>
                    <a target="_blank" rel="nofollow noopener" href="#">Privacy Policy</a>
                </div>
            </div>
            <div className={styles.footer_link_wrapper}>
                <div className={styles.footer_link_items}>
                    <h2>Resources</h2>
                    <a rel="nofollow noopener" href="#">Join our Discord</a>
                    <a rel="nofollow noopener" href="#">System Status</a>
                    <a rel="nofollow noopener" href="#">Meet the Team</a>
                    <a rel="nofollow noopener" href="#">Vote on Top.gg</a>
                </div>
            </div>
        </div>
        <section className={styles.social_media}>
            <div className={styles.social_media_wrap}>
                <div className={styles.footer_logo}>
                    <a><img src={Logo} alt="Logo" />FORA</a>
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