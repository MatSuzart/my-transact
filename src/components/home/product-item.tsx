"use client"

import { Product } from "@/generated/prisma";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {
    data:Product;
}

export const ProductItem = ({ data }:Props)=>{

    const handleAddToCart = ()=>{
        
    }

    return (
        <div className="text-sm bg-secundary p-4 rounded-md">
            <Image
                src={data.image}
                alt={data.name}
                width={200}
                height={200}
                className="w-full mb-3"
            />
            <div className="text-lg font-bold">{data.name}</div>
            <div>{data.price.toString()}</div>
            <div className="truncate mb-3">{data.receipt}</div>
            <div className="text-center">
                <Button onClick={handleAddToCart}>Adicionar</Button>
            </div>
        </div>
    );
}