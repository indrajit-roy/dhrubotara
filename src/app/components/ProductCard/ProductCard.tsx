import React from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productDetails}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <span className={styles.price}>${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;