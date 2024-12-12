"use client"
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import SignInButton from '../SignInButton';

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

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      {isMobile ? (
        <div className={styles.mobileNav}>

            <Link href="/" className={styles.logo}>
              DHRUBO TARA
            </Link>
            <SignInButton size='small' />

        </div>
      ) : (
        <div className={`container ${styles.navContent}`}>
          <Link href="/" className={styles.logo}>
            DHRUBO TARA
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/shop" className={styles.button}>Shop Now</Link>
        </div>
        <SignInButton />
      </div>)}
    </nav>
  );
};

export default Navbar;