export interface ProductI {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface  ProductMapedI {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
    category: string;
    img: string;
}

export interface ProductListI {
    products: ProductI[];
    total: number;
    skip: number;
    limit: number;
}

export interface DataToSearchProductListI {
    q: string
}
export interface DataToCreateProductI {
    title: string,
    price: number,
    description: string,
    rating: number,
}