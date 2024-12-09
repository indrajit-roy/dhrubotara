import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import { products } from './data/products';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <h1>DHRUBO TARA</h1>
          <p>Organic healing with Bengali herbs</p>
          <button className={styles.button}>Shop Now</button>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}