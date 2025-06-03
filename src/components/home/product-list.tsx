"use client"

import { Product } from "@/generated/prisma";
import { ProductItem } from "./product-item";
import { useProducts } from "@/app/stores/products";
import { useEffect } from "react";
type Props = {
    products: Product[];
}

export const ProductList = ({products}:Props)=>{
    const stuff = useProducts();
    useEffect(()=>stuff.setProducts(products),[]);
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((item:Product)=>(
                <ProductItem 
                    key={item.id}
                    data={item}
                />
            ))}
        </div>
    );
}
