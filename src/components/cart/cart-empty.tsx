"use client"

import { useCart } from "@/app/stores/cart";
import { Button } from "../ui/button";
export const CartEmpty = ()=> {
    const { setOpen } = useCart();
    return (
        <div className="my-10 text-center">
            <p className="mb-4">Empty</p>
            <Button onClick={()=>setOpen(false)}>Fechar</Button>
        </div>
    );
}