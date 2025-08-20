"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { CartButton } from "../cart/cart-button"
import { LoginAreaBotton } from "../login-area/login-area-botton"
import { cookies } from "next/headers"

export const Header = async() =>{
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    return (    
        <header className="container mx-auto flex my-4 p-5 items-center jutify-between bg-secondary rounded-md">
            <Link href="/">
                <div className="text-2xl font-bold">Products</div>
            </Link>
            <div className="flex gap-2">
                <LoginAreaBotton initialState={token ? true:false}/>
                <CartButton />
            </div>
        </header>
    )
}