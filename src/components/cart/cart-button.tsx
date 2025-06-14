"use-client"

import { useCart } from "@/app/stores/cart";
import { Button } from "../ui/button";

export const CartButton = () =>{
    const cart = useCart();
    
    return (
        <Button onClick={()=> cart.setOpen(true)}>Carrinho</Button>
    );
}