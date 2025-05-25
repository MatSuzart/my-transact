"use-client"

import { Product } from "@/generated/prisma";
import { ProductItem } from "./product-item";
type Props = {
    products: Product[];
}

export const ProductList = ({products}:Props)=>{
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
