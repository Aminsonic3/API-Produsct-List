import React from 'react'

export type Product = {
    id:number;
    name:string;
    price:number;
    inStock: boolean;
    image: string;
}
export type ProductsResponse = {
    data: Product[];
    page: number;
    limit: number;
    total:number;
    totalPages: number;

}
export type Category = {
    id: number;
    slug: string;
    name: string;
    productCount: number;
  };
  
  export type CategoriesResponse = {
    data: Category[];
  };


