"use client"

import { Product } from "@/generated/prisma";
import { Image } from "lucide-react"; talvez a lib esteja errada ? 
type Props = {
    data:Product;
}

export const ProductItem = ({ data }:Props)=>{
    return (
        <div className="text-sm bg-secundary p-4 rounded-md">
            <Image
                src={data.image} // essa linha está dando erro
                alt={data.name}
                width={200}
                height={200}
                className="w-full mb-3"
            />
        </div>
    );
}