"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "@/utils/helpers";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [filteredProducts, dispatch] = useReducer(reducer, []);
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from fakestoreapi.com
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        let data = await response.json();

        // Transform the API data to match our application structure
        data = data.map((item) => ({
          id: item.id,
          name: item.title,
          description: item.description,
          price: item.price,
          image: item.image,
          category: item.category,
          idealFor: item.category.includes("men")
            ? "men"
            : item.category.includes("women")
            ? "women"
            : "unisex",
          fabric: "cotton", // Default values for missing properties
          pattern: "solid",
          occasion: "casual",
          work: "plain",
          segment: item.category.includes("men")
            ? "mens-clothing"
            : item.category.includes("women")
            ? "womens-clothing"
            : "unisex-clothing",
          suitableFor: ["daily-wear", "casual"],
          addedOn: new Date().toISOString(),
          rating: item.rating?.rate || 4.5,
        }));

        setProducts(data);
        setProductList(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (filterList?.length > 0) {
      const idealFiltered = products?.filter((product) =>
        filterList?.includes(product?.idealFor)
      );
      const occasionFiltered = products?.filter((product) =>
        filterList?.includes(product?.occasion)
      );
      const fabricFiltered = products?.filter((product) =>
        filterList?.includes(product?.fabric)
      );
      const segmentFiltered = products?.filter((product) =>
        filterList?.includes(product?.segment)
      );
      const workFiltered = products?.filter((product) =>
        filterList?.includes(product?.work)
      );
      const patternFiltered = products?.filter((product) =>
        filterList?.includes(product?.pattern)
      );
      const suitableForFiltered = products?.filter((product) => {
        for (let item of product?.suitableFor) {
          if (filterList?.includes(item)) {
            return item;
          }
        }
      });
      const final = [
        ...idealFiltered,
        ...occasionFiltered,
        ...fabricFiltered,
        ...segmentFiltered,
        ...workFiltered,
        ...patternFiltered,
        ...suitableForFiltered,
      ];
      const newData = [
        ...new Map(final.map((item) => [item["id"], item])).values(),
      ];
      setProductList(newData);
    } else {
      setProductList(products);
    }
  }, [filterList, products]);

  return (
    <DataContext.Provider
      value={{
        products,
        filteredProducts,
        dispatch,
        filterList,
        setFilterList,
        productList,
        setProductList,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
