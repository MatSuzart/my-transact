import { getLoggedUser } from "@/services/auth";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createNewOrder } from "@/services/order";

export async function POST(request: Request){
    const handersList = headers();
    const origin = headersList.get('origin');

    const { cart } = await request.json();
    const loggedUser = await getLoggedUser()

    if(!loggedUser){ return NextResponse.json({error: 'User error loggin.'})};
    if(!cart  || (cart.length === 0)) return NextResponse.json({error: 'Cart is empty.'});
    
    //console.log(cart);
    const order = await createNewOrder(loggedUser.id, cart);
    if(!order) return NextResponse.json({error: 'Error creating order.'});

    const paymentSession = await stripe.checkout.sessions.create({
        mode: 'payment',
        sucess_url: `${origin}/succes?ession_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}`,
        line_items: [
            {
                
            }
        ]
    })

    return NextResponse.json({});
}