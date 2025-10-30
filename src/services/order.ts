import { CartItem } from "@/types/cart-item";

export const createOrder = async (cart: CartItem[])=>{
    const orderProducts = []
    let subtotal = 0

    for(let item of cart){
        const product = await prisma.prduct.findUnique({
            where: {id: item}
        });
        if (product){
            orderProducts.push({
                productId: product.id,
                price: parseFloat(product.price.toString()),
                quantity: item.quantity
            });
            subtotal += product.price * parseFloat(product.price.toString()) 
        }


    }

    const newOrder = await prisma.order.create({
        data: {
            userId,
            subtotal,
            orderProducts: {
                createMany: {
                    data: orderProducts
                }
            }
        }
    })
}