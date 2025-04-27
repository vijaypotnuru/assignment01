"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

interface ProductListProps {
  products: Product[];
  onToggleFilters: () => void;
}

const ProductList = ({ products, onToggleFilters }: ProductListProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState("recommended");

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className={styles.productListContainer}>
      <div className={styles.productListHeader}>
        <div className={styles.productCount}>
          <span>{products.length} Items</span>
        </div>

        <div className={styles.filterControls}>
          <button className={styles.showFilterButton} onClick={onToggleFilters}>
            <Image
              src="/images/arrow-down.svg"
              alt="Show filters"
              width={20}
              height={20}
              className={styles.rotateRight}
            />
            <span>SHOW FILTER</span>
          </button>

          <div className={styles.sortContainer}>
            <span className={styles.sortLabel}>RECOMMENDED</span>
            <Image
              src="/images/arrow-down.svg"
              alt="Sort options"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <ProductCard
              product={product}
              onAddToFavorites={toggleFavorite}
              isFavorite={favorites.includes(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
