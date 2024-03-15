import React, { useState } from 'react';
import styles from './productCard.module.css'; // Adjust the import path to match your file structure

function ProductCard({ imageSrc, productName }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={imageSrc} alt={productName} />
      <h3>{productName}</h3>
      <div className={styles.productInfo}>
      <p> <span className={styles.signIn}>Sign in</span> or create an account to see pricing</p>
        
        <div className={styles.likeContainer} onClick={toggleLike}>
          <div className={`${styles.like} ${liked ? styles.liked : ''}`}>❤</div>
        </div>
      </div>
    </div>
  );
}


export default ProductCard;
