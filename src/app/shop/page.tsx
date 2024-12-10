import React from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/data/products';
import styles from './shop.module.css';

export default function Shop() {
  return (
    <main className={styles.main}>
      
      <section className={styles.shopSection}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Products</h1>
          <p className={styles.pageDescription}>
            Discover our collection of natural Bengali herbal products
          </p>
          
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