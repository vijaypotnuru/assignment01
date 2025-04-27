import { Metadata } from "next";
import { fetchProducts } from "@/utils/api";
import { Header, Footer } from "../components";
import ProductsClient from "./products-client";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Product Listing | Appscrip E-Commerce Store",
  description:
    "Browse our complete collection of products. Find the perfect items that match your style with our curated selections and filters.",
  keywords:
    "e-commerce, products, online shopping, fashion, accessories, premium brands, product listing",
};

export default async function ProductsPage() {
  // Server-side data fetching
  const products = await fetchProducts();

  // Generate JSON-LD schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': products.slice(0, 10).map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': product.title,
        'description': product.description,
        'image': product.image,
        'offers': {
          '@type': 'Offer',
          'price': product.price,
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock'
        }
      }
    }))
  };

  return (
    <>
      {/* Add JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className={styles.main}>
        <Header />

        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.heroText}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </section>

        <section className={styles.productsSection}>
          {/* Pass server-fetched data to client component */}
          <ProductsClient initialProducts={products} />
        </section>

        <Footer />
      </main>
    </>
  );
}
