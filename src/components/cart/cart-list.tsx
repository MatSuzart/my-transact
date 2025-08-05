"use client"
import { useCart } from "@/app/stores/cart";
import { Button } from "../ui/button";
import { useProducts } from "@/app/stores/products";
import { useState } from "react";
import { CartProduct } from "./cart-product";
import { decimalToMoney } from "@/lib/utils";

export const CartList = () => {
    const cart = useCart();
    const products = useProducts();

    const [subtotal, setSubtotal] = useState(0)
    const [shippingCost, setShippingCost] = useState(0)

    const calculateState = ()=>{
        let sub = 0;
        for(let item of cart.items){
            const product = products.stuff.find(pitem =>pitem.id === item.productId)
            if(product) sub += item.quantity * parseFloat(product.price.toString());

        }
        setSubtotal(sub)
    }

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
        <div className="my-4 text-right">
            <div>Sub-Total:{decimalToMoney(subtotal)}</div>
            <div>Frete:{decimalToMoney(shippingCost)}</div>
            <div className="font-bold">Total:{decimalToMoney(subtotal+shippingCost)}</div>
        </div>
        <Button>Finalizar Compra</Button>
        </>
    
    );
}