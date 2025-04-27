import Image from "next/image";
import Link from "next/link";
import Favourite from "@/assets/favourite.svg";
import { useState } from "react";
import {
  ensureValidImageUrl,
  formatCurrency,
  formatProductName,
  capitalizeFirstLetter,
} from "@/utils/helpers";
import "./product-card.css";

export const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="product-item">
      <div className="image-container">
        <Image
          src={
            imageError
              ? "/placeholder-image.svg"
              : ensureValidImageUrl(product?.image)
          }
          width={300}
          height={399}
          alt={product?.name || "Product image"}
          className="product-image"
          onError={handleImageError}
          priority={false}
          loading="lazy"
        />
        {product?.rating && (
          <div className="product-rating">
            <span>★</span> {product?.rating?.toFixed(1)}
          </div>
        )}
      </div>
      <div className="product-data">
        <div className="flex-col">
          <p className="product-name">{formatProductName(product?.name)}</p>
          <p className="product-price">Rs.{product?.price?.toFixed(2)}</p>
          {product?.category && (
            <p className="product-category">
              {capitalizeFirstLetter(product?.category)}
            </p>
          )}
        </div>
        <Image src={Favourite} width={24} height={24} alt="Add to favorites" />
      </div>
    </div>
  );
};
