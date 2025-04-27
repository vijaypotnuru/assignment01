export const reducer = (state, action) => {
  switch (action?.type) {
    case "recommended":
      return [
        ...action?.payload?.filter(
          (product) => product?.idealFor?.toLowerCase() === "unisex"
        ),
      ];
    case "newest-first":
      return [
        ...action?.payload?.sort(
          (product1, product2) =>
            new Date(product2?.addedOn) - new Date(product1?.addedOn)
        ),
      ];
    case "popular":
      return [...action?.payload?.filter((product) => product?.rating >= 4)];
    case "pricehightolow":
      return [
        ...action?.payload?.sort(
          (product1, product2) => product2?.price - product1?.price
        ),
      ];
    case "pricelowtohigh":
      return [
        ...action?.payload?.sort(
          (product1, product2) => product1?.price - product2?.price
        ),
      ];
    default:
      return action?.payload;
  }
};

// Format currency
export const formatCurrency = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(price);
};

// Helper to check if URL is valid
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Ensure image URL is valid
export const ensureValidImageUrl = (url) => {
  if (!url || !isValidUrl(url)) {
    return "/placeholder-image.svg";
  }
  return url;
};

// Format product name
export const formatProductName = (name) => {
  if (!name) return "";
  if (name.length <= 60) return name;
  return name.substring(0, 57) + "...";
};

// Capitalize first letter of a string
export const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};
