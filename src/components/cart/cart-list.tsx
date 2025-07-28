"use client"
import { useCart } from "@/app/stores/cart";
import { Button } from "../ui/button";
import { useProducts } from "@/app/stores/products";
import { useState } from "react";
import { CartProduct } from "./cart-product";

export const CartList = () => {
    const cart = useCart();
    const products = useProducts();

    const [subtotal, setSubtotal] = useState(0)
    const [shippingCost, setShippingCost] = useState(0)
    return (
        <>
        <div className="flex flex-col gap-3 my-5">
            {cart.items.map(item=>(
                <CartProduct
                key={item.productId}
                data={item}
                />
            ))}
        </div>
        <div>
            <div>Sub-Total:</div>
            <div>Frete:</div>
            <div>Total:</div>
        </div>
        <Button>Finalizar Compra</Button>
        </>
    
    );
}