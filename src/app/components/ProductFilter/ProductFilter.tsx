"use client";

import { useState } from "react";
import Image from "next/image";
import { Filter } from "@/types";
import styles from "./ProductFilter.module.css";

interface ProductFilterProps {
  filters: Filter[];
  onFilterChange: (filterId: string, values: string[]) => void;
  onClearFilters: () => void;
  isVisible: boolean;
  onToggleFilters: () => void;
}

const ProductFilter = ({
  filters,
  onFilterChange,
  onClearFilters,
  isVisible,
  onToggleFilters,
}: ProductFilterProps) => {
  const [expandedFilters, setExpandedFilters] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleFilter = (filterId: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterId]: !prev[filterId],
    }));
  };

  const handleCheckboxChange = (filterId: string, value: string) => {
    const filter = filters.find((f) => f.id === filterId);
    if (!filter) return;

    let updatedValues;
    if (filter.selected.includes(value)) {
      updatedValues = filter.selected.filter((v) => v !== value);
    } else {
      updatedValues = [...filter.selected, value];
    }

    onFilterChange(filterId, updatedValues);
  };

  return (
    <div
      className={`${styles.filterContainer} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.filterHeader}>
        <div className={styles.customizableFilter}>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="customizable" />
            <label htmlFor="customizable">Customizble</label>
          </div>
        </div>
      </div>

      <div className={styles.separator}></div>

      {filters.map((filter) => (
        <div key={filter.id} className={styles.filterSection}>
          <div
            className={styles.filterTitle}
            onClick={() => toggleFilter(filter.id)}
          >
            <div className={styles.filterName}>
              <span className={styles.filterLabel}>{filter.name}</span>
              <button className={styles.arrowButton}>
                <Image
                  src="/images/arrow-down.svg"
                  alt="Toggle filter"
                  width={20}
                  height={20}
                  className={expandedFilters[filter.id] ? styles.rotated : ""}
                />
              </button>
            </div>
            <div className={styles.filterValue}>
              <span>
                {filter.selected.length > 0
                  ? filter.selected.join(", ")
                  : "All"}
              </span>
            </div>
          </div>

          {expandedFilters[filter.id] && (
            <div className={styles.filterOptions}>
              {filter.values.map((value) => (
                <div key={value} className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id={`${filter.id}-${value}`}
                    checked={filter.selected.includes(value)}
                    onChange={() => handleCheckboxChange(filter.id, value)}
                  />
                  <label htmlFor={`${filter.id}-${value}`}>{value}</label>
                </div>
              ))}
            </div>
          )}

          <div className={styles.separator}></div>
        </div>
      ))}

      <div className={styles.filterActions}>
        <button className={styles.hideFilterButton} onClick={onToggleFilters}>
          <Image
            src="/images/arrow-down.svg"
            alt="Hide filters"
            width={20}
            height={20}
            className={styles.rotateLeft}
          />
          <span>HIDE FILTER</span>
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
