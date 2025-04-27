import { Product } from "../types";

// Function to fetch products from FakeStore API
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const products = await response.json();

    // Add custom properties to match our product filters
    return products.map((product: Product) => ({
      ...product,
      idealFor: ["Men", "Women", "Unisex"][Math.floor(Math.random() * 3)],
      occasion: ["Casual", "Formal", "Party", "Work"][
        Math.floor(Math.random() * 4)
      ],
      work: ["Embroidered", "Printed", "Solid", "Woven"][
        Math.floor(Math.random() * 4)
      ],
      fabric: ["Cotton", "Silk", "Wool", "Synthetic", "Linen"][
        Math.floor(Math.random() * 5)
      ],
      segment: ["Budget", "Regular", "Premium", "Luxury"][
        Math.floor(Math.random() * 4)
      ],
      suitableFor: ["Summer", "Winter", "All Seasons"][
        Math.floor(Math.random() * 3)
      ],
      rawMaterials: ["Organic", "Recycled", "Natural", "Synthetic"][
        Math.floor(Math.random() * 4)
      ],
      pattern: ["Solid", "Printed", "Checkered", "Striped"][
        Math.floor(Math.random() * 4)
      ],
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
