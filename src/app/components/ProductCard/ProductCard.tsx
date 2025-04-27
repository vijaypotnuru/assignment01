"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onAddToFavorites: (id: number) => void;
  isFavorite: boolean;
}

const ProductCard = ({
  product,
  onAddToFavorites,
  isFavorite,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Use placeholder image if real image has issues or for local testing
  const imageSrc = product.image;

  // For hover effect, use a different product image or the same one with a filter
  const hoverImageSrc = isHovered
    ? `/images/product${(product.id % 6) + 1}.svg`
    : `/images/product${product.id % 6 || 6}.svg`;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToFavorites(product.id);
  };

  const productHasTag = product.id % 5 === 0;

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <Image
          src={hoverImageSrc}
          alt={product.title}
          width={300}
          height={350}
          className={styles.productImage}
        />

        {productHasTag && (
          <div className={styles.tag}>
            {product.id % 10 === 0 ? "out of stock" : "new product"}
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.productTitle}>{product.title}</h3>

        <div className={styles.priceContainer}>
          <p className={styles.loginText}>
            Sign in or Create an account to see pricing
          </p>

          <button
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.active : ""
            }`}
            onClick={handleFavoriteClick}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Image
              src="/images/heart.svg"
              alt="Heart"
              width={24}
              height={24}
              className={isFavorite ? styles.activeFavorite : ""}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
