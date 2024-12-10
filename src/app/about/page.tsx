import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.aboutSection}>
        <div className="container">
          <h1 className={styles.pageTitle}>About Us</h1>
          
          <div className={styles.content}>
            <div className={styles.storySection}>
              <h2>Our Story</h2>
              <p>
                DHRUBO TARA was born from a deep appreciation for traditional Bengali
                herbal remedies and a commitment to bringing these natural healing
                practices to the modern world. Our journey began with a simple
                mission: to preserve and share the ancient wisdom of Bengali herbal
                medicine while making it accessible to everyone.
              </p>
            </div>

            <div className={styles.missionSection}>
              <h2>Our Mission</h2>
              <p>
                We are dedicated to creating natural, organic products that harness
                the healing power of Bengali herbs. Every product is thoughtfully
                crafted using traditional methods and sustainably sourced
                ingredients, ensuring both effectiveness and environmental
                responsibility.
              </p>
            </div>

            <div className={styles.valuesSection}>
              <h2>Our Values</h2>
              <ul>
                <li>Natural and organic ingredients</li>
                <li>Traditional Bengali healing wisdom</li>
                <li>Sustainable practices</li>
                <li>Quality and authenticity</li>
                <li>Community well-being</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 