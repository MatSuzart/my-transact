import { getLoggedUser } from "@/services/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const { cart } = await request.json();
    const loggedUser = await getLoggedUser()

    if(!loggedUser){ return NextResponse.json({error: 'User error loggin.'})};
    if(!cart  || (cart.length === 0)) return NextResponse.json({error: 'Cart is empty.'});
    
    //console.log(cart);
    return NextResponse.json({});
}