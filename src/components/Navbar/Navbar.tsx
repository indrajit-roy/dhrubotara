"use client"
import React, { useState, useEffect, useMemo } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    console.log('Window width:', window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logo = useMemo(() => {
    const size = isMobile ? 48 : 64;

    return <Link href="/" className={styles.logo}>
      <img src="/logo.webp" alt="Dhrubo Tara" width={1.158 * size} height={size} />
    </Link>
  }, [])

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      {isMobile ? (
        <div className={styles.mobileNav}>
          {logo}
          {isScrolled && <h5>DHRUBO TARA</h5>}
          <Link href="/shop" className={`button-dark`}>Shop Now</Link>
        </div>
      ) : (
        <div className={`container ${styles.navContent}`}>
          {logo}
          <div className={styles.navLinks}>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/shop" className={styles.button}>Shop Now</Link>
          </div>
        </div>)}
    </nav>
  );
};

export default Navbar;