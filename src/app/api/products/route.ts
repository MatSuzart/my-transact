import { getAllProducts } from "@/services/product";
import { NextResponse } from "next/server";

export async function GET(){
    let products = await getAllProducts();

    products = products.map(product =>({
        ...product,
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.image}`
    }));
    
    return NextResponse.json({ products });
}

