import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContent}`}>
        <Link href="/" className={styles.logo}>
          DHRUBO TARA
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/shop" className={styles.navLink}>Shop</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <button className={styles.button}>Shop Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;