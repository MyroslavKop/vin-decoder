import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="variables" className={styles.link}>
              Variables
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
