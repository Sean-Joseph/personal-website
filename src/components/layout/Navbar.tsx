import styles from "./Navbar.module.css";

type NavbarProps = {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ menuActive, setMenuActive }: NavbarProps) => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Sean Joseph</div>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button
            className={styles.menuButton}
            onClick={() => setMenuActive(true)}
            aria-label="Open Menu"
          >
            <svg viewBox="0 0 50 50">
              <path d="M0 9h50M0 24h50M0 39h50" stroke="currentColor" strokeWidth="3"/>
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${
          menuActive ? styles.menuActive : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={() => setMenuActive(false)}
          aria-label="Close Menu"
        >
          <svg viewBox="0 0 50 50">
            <path
              d="M10 10l30 30M40 10L10 40"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
        </button>

        <ul className={styles.mobileLinks}>
          <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setMenuActive(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
