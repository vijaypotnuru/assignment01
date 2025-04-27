"use client";

import { useState } from "react";
import { Product, Filter } from "@/types";
import { ProductFilter, ProductList } from "../components";
import styles from "../page.module.css";

// Pre-defined filter categories
const filterCategories: Filter[] = [
  {
    id: "idealFor",
    name: "IDEAL FOR",
    values: ["Men", "Women", "Unisex"],
    selected: [],
  },
  {
    id: "occasion",
    name: "OCCASION",
    values: ["Casual", "Formal", "Party", "Work"],
    selected: [],
  },
  {
    id: "work",
    name: "WORK",
    values: ["Embroidered", "Printed", "Solid", "Woven"],
    selected: [],
  },
  {
    id: "fabric",
    name: "FABRIC",
    values: ["Cotton", "Silk", "Wool", "Synthetic", "Linen"],
    selected: [],
  },
  {
    id: "segment",
    name: "SEGMENT",
    values: ["Budget", "Regular", "Premium", "Luxury"],
    selected: [],
  },
  {
    id: "suitableFor",
    name: "SUITABLE FOR",
    values: ["Summer", "Winter", "All Seasons"],
    selected: [],
  },
  {
    id: "rawMaterials",
    name: "RAW MATERIALS",
    values: ["Organic", "Recycled", "Natural", "Synthetic"],
    selected: [],
  },
  {
    id: "pattern",
    name: "PATTERN",
    values: ["Solid", "Printed", "Checkered", "Striped"],
    selected: [],
  },
];

interface ProductsClientProps {
  initialProducts: Product[];
}

export default function ProductsClient({
  initialProducts,
}: ProductsClientProps) {
  const [filters, setFilters] = useState<Filter[]>(filterCategories);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);
  const [filtersVisible, setFiltersVisible] = useState(true);

  // Apply filters anytime they change
  const applyFilters = (currentFilters: Filter[]) => {
    const activeFilters = currentFilters.filter((f) => f.selected.length > 0);

    if (activeFilters.length === 0) {
      setFilteredProducts(initialProducts);
      return;
    }

    const filtered = initialProducts.filter((product) => {
      return activeFilters.every((filter) => {
        const productValue = product[filter.id as keyof Product];

        // If the product doesn't have this property, skip this filter
        if (!productValue) return true;

        // If any of the selected values match, include the product
        return filter.selected.includes(productValue as string);
      });
    });

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filterId: string, selectedValues: string[]) => {
    const updatedFilters = filters.map((filter) =>
      filter.id === filterId ? { ...filter, selected: selectedValues } : filter
    );

    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = filters.map((filter) => ({
      ...filter,
      selected: [],
    }));
    setFilters(clearedFilters);
    setFilteredProducts(initialProducts);
  };

  const toggleFiltersVisibility = () => {
    setFiltersVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productsLayout}>
        {filtersVisible && (
          <div className={styles.filtersColumn}>
            <ProductFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              isVisible={filtersVisible}
              onToggleFilters={toggleFiltersVisibility}
            />
          </div>
        )}

        <div className={styles.productsColumn}>
          <ProductList
            products={filteredProducts}
            onToggleFilters={toggleFiltersVisibility}
          />
        </div>
      </div>
    </div>
  );
}
