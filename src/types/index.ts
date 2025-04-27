export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  idealFor?: string;
  occasion?: string;
  work?: string;
  fabric?: string;
  segment?: string;
  suitableFor?: string;
  rawMaterials?: string;
  pattern?: string;
}

export interface Filter {
  id: string;
  name: string;
  values: string[];
  selected: string[];
}
