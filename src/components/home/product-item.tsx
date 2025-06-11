"use client"

import { Product } from "@/generated/prisma";
import Image from "next/image";
import { Button } from "../ui/button";
import { decimalToMoney } from "@/lib/utils";
import { useCart } from "@/app/stores/cart";

type Props = {
    data:Product;
}

export const ProductItem = ({ data }:Props)=>{
    const cart = useCart();

    const handleAddToCart = ()=>{
        cart.addItem({
            productId: data.id,
            quantity: 1
        });
        cart.setOpen(true);
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
            <div>{decimalToMoney(data.price)}</div>
            <div className="truncate mb-3">{data.receipt}</div>
            <div className="text-center">
                <Button onClick={handleAddToCart}>Adicionar</Button>
            </div>
        </div>
    );
}